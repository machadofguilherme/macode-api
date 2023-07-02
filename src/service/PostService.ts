import postValidate from "../helpers/postValidate";
import IPostBody from "../interfaces/IPostBody";
import { IPost, IPostError } from "../interfaces/IPost";
import Post from "../models/PostSchema";
import createNextPage from "../utils/createNextPage";
import createPreviouPage from "../utils/createPreviouPage";
import { title } from "process";
import IPostUpdateBody from "../interfaces/IPostUpdateBody";
import UpdateSchema from "../schemas/UpdateSchema";

const countData = async (): Promise<number> => {
    const quantity = await Post.countDocuments();
    return quantity;
}

const find = async (
    limit: number,
    offset: number,
    endpoint: string
    ): Promise<{}> => {
    const allPosts = await Post
        .find({}, { __v: false })
        .sort({ _id: -1 })
        .skip(offset).limit(limit);
    
    const total = await countData();
    const nextPage = createNextPage(limit, offset, total, endpoint);
    const previousPage = createPreviouPage(limit, offset, endpoint);

    return {
        nextPage,
        previousPage,
        limit,
        offset,
        allPosts,
        total
    }
}

const findOne = async (id: string) => {
    const post = await Post
        .findOne({ _id: id }, { __v: false });

    return post;
}

const create = async (data: IPostBody):
    Promise<IPost | IPostError | {}> => {
        const checkContent = postValidate(data);
        
        if (checkContent?.code === 400) {
            return checkContent;
        }        
        
        const addNewPost: any = await Post.create(data);
        
        return {
            id: addNewPost._id,
            title: addNewPost.title,
            status: 'Created post'
        };
};

const findByIdAndUpdate = async ({
    title,
    description,
    content,
    tags,
}: IPostUpdateBody, id: string) => {
    const { error } = UpdateSchema
        .validate({ title, description, content, tags });

    if (error) {
        return { message: error.message, code: 400 };
    }

    const post = await Post.findByIdAndUpdate(id, {
        title,
        description,
        content,
        tags,
    });

    return { message: `Updated post with id ${post?._id}` };
}

export default { find, findOne, create, findByIdAndUpdate };

import postValidate from "../helpers/postValidate";
import IPostBody from "../interfaces/IPostBody";
import IPost from "../interfaces/IPost";
import Post from "../models/PostSchema";
import createNextPage from "../utils/createNextPage";
import createPreviouPage from "../utils/createPreviouPage";

const countData = (): number => {
    return Number(Post.countDocuments());
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
    
    const total = countData();
    const nextPage = createNextPage(limit, offset, total, endpoint);
    const previousPage = createPreviouPage(limit, offset, endpoint);

    return {
        nextPage,
        previousPage,
        limit,
        offset,
        allPosts,
    }
}

const findOne = async (id: string) => {
    const post = await Post
        .findOne({ _id: id }, { __v: false });

    return post;
}

const create = async (data: IPostBody):
    Promise<IPost | {}> => {
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

export default { find, findOne, create };

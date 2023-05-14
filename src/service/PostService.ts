import postValidate from "../helpers/postValidate";
import IPostBody from "../interfaces/IPostBody";
import IPost from "../interfaces/IPost";
import Post from "../models/PostSchema";

const find = async (): Promise<IPostBody[]> => {
    const allPosts = await Post.find({}, {
        _id: false,
        __v: false, 
    });

    return allPosts as [];
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

export default { find, create };

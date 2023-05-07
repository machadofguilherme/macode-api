import postValidate from "../helpers/postValidate";
import IPostBody from "../interfaces/IPostBody";
import IPost from "../interfaces/IPost";
import Post from "../models/PostSchema";

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

export default { create };

import { ITag, ITagError } from "../interfaces/ITag";
import tagValidate from "../helpers/tagValidate";
import Post from "../models/PostSchema";

const find =
    async (body: string): Promise<ITag[] | ITagError> => {
   const error = tagValidate(body);
   
   if (error?.code === 400) {
    return error;
   }

   const postByTag = await Post
    .find(
        { tags: { $in: [ body ] } },
        { __v: false });
   
   return postByTag;
}

export default { find };
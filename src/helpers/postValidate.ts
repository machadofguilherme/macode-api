import IPostBody from "../interfaces/IPostBody";
import PostSchema from "../schemas/PostSchema";
import { postError } from "../utils/errorMap";

const postValidate = (dataPost: IPostBody) => {
    const Error = PostSchema.validate(dataPost);
    const errorMessage = Error.error?.message;
    
    if (errorMessage) {
        return postError;
    }
}

export default postValidate;
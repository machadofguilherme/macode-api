import TagSchema from "../schemas/TagSchema";
import { tagError } from "../utils/errorMap";

const tagValidate = (data: string) => {
    const Error = TagSchema.validate(data);    
    const errorMessage = Error.error?.message;
    
    if (errorMessage) {
        return tagError;
    }
}

export default tagValidate;
import TTags from "../types/TTags";

export default interface IPostBody {
    author: string;
    date: string;
    title: string;
    description: string
    tags: TTags[];
    content: string;
}
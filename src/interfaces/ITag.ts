import { TTags } from "../types/TTags";

export interface ITag {    
    author: string;
    date: string;
    title: string;
    description: string
    tags: TTags[];
    content: string;
}

export interface ITagError {
    code: number;
    message: string;
}
import { TTags } from "../types/TTags";

export default interface IPostUpdateBody {
  title: string;
  description: string;
  content: string;
  tags: TTags[];
  id?: string;
};
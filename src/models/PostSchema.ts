import mongoose, { Schema, model } from 'mongoose';

const postSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  tags: [],
});

const Post = model('Post', postSchema);

export default Post;
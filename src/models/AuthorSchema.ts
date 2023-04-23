import mongoose, { Schema, model } from 'mongoose';

const authorSchema = new Schema({
  author: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Author = model('Author', authorSchema);

export default Author;
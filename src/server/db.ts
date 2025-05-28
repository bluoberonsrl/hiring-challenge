import { type Post, type PostId } from "~/models/post";

// Mocked DB
export const db = new Map<PostId, Post>([
  [1, { id: 1, title: "Hello World", createdAt: Date.now() }],
  [2, { id: 2, title: "Hello World 2", createdAt: Date.now() }],
]);

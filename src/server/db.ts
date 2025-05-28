import { type Post, type PostId } from "~/models/post";

export const db = mockDB();

export function mockDB(): Map<PostId, Post> {
  return new Map<PostId, Post>([
    [1, { id: 1, title: "Hello World", createdAt: Date.now() }],
    [2, { id: 2, title: "Hello World 2", createdAt: Date.now() }],
  ]);
}

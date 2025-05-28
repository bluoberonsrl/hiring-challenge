import { z } from "zod";

// -- Schema --

export const PostSchema = z.object({
  id: z.number(), // Incremental ID, starting from 1
  title: z.string(),
  createdAt: z.number(), // Unix timestamp in milliseconds
});

// -- Types --

export type Post = z.infer<typeof PostSchema>;
export type PostId = Post["id"];

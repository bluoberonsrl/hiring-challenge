import { z } from "zod";

// -- Schema --

export const PostSchema = z.object({
  id: z.string().uuid(),
  title: z.string().max(32, "Title must be less than 32 characters"),
  content: z.string(),
  createdAt: z.number(), // Unix timestamp in milliseconds
});

// -- Types --

export type Post = z.infer<typeof PostSchema>;
export type PostId = Post["id"];

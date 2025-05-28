import { db, mockDB } from "~/server/db";

export const GET = async () => {
  db.clear();
  for (const [postId, post] of mockDB()) {
    db.set(postId, post);
  }
  return new Response("Database reset");
};

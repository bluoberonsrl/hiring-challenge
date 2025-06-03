import { type Post, type PostId } from "~/models/post";
import crypto from "node:crypto";

/**
 * You can import the db and use it everywhere
 * For example
 * ```ts
 * import { db } from "~/server/db";
 *
 * // get a post
 * const post = db.get(1);
 *
 * // upsert a post
 * db.set(1, { id: 1, title: "Hello World", createdAt: Date.now() });
 * ```
 */

export const db = mockDB();

/**
 * During development, you may want to reset the db to its initial state
 * You can call the `/api/reset-db` endpoint to do so
 */

export function mockDB(): Map<PostId, Post> {
  const id1 = crypto.randomUUID();
  const id2 = crypto.randomUUID();
  return new Map<PostId, Post>([
    [
      id1,
      {
        id: id1,
        title: "10 Tips for a Healthier Lifestyle",
        content:
          "Start your journey to better health with these simple tips: exercise regularly, eat more vegetables, stay hydrated, get enough sleep, manage stress, limit processed foods, practice mindfulness, take breaks from screens, spend time outdoors, and maintain social connections.",
        createdAt: Date.now(),
      },
    ],
    [
      id2,
      {
        id: id2,
        title: "Understanding Today's Popular Music Trends",
        content:
          "From catchy pop hits to indie discoveries, explore what's shaping today's music scene. New genres are emerging, classic styles are making comebacks, and streaming platforms are changing how we discover music. Whether you're a casual listener or a dedicated fan, there's something interesting happening in every corner of the music world.",
        createdAt: Date.now(),
      },
    ],
  ]);
}

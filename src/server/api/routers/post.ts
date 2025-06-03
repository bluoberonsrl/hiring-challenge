import { PostSchema } from "~/models/post";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// If you want to use tRPC, you can add all the procedures here
export const postRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    // example procedure
  }),

  create: publicProcedure.input(PostSchema).mutation(({ ctx, input }) => {
    // example procedure
  }),
});

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    // TODO: implement
  }),

  create: publicProcedure.query(({ ctx }) => {
    // TODO: implement
  }),
});

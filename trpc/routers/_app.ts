import { categoryRouter } from "@/modules/categories/server/proceddures";
import { createTRPCRouter } from "@/trpc/init";
export const appRouter = createTRPCRouter({
  category: categoryRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
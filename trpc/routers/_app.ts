import { categoryRouter } from "@/modules/categories/server/proceddures";
import { studiorouter } from "@/modules/studio/server/procedures";
import { createTRPCRouter } from "@/trpc/init";
export const appRouter = createTRPCRouter({
  category: categoryRouter,
  studio: studiorouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
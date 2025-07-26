import { categoryRouter } from "@/modules/categories/server/procedures";
import { studiorouter } from "@/modules/studio/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";
import { createTRPCRouter } from "@/trpc/init";
export const appRouter = createTRPCRouter({
  category: categoryRouter,
  studio: studiorouter,
  videos: videosRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
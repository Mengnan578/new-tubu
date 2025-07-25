import { db } from "@/db";
import { createTRPCRouter } from "@/trpc/init";
import { baseProcedure } from "@/trpc/init";
import { categories } from "@/db/schema";

export const categoryRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    return await db.select().from(categories);
  }),
});

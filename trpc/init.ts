import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { auth } from "@clerk/nextjs/server";
import { cache } from "react";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ratelimit } from "@/lib/ratelimit";

// 创建trpc上下文,此处返回的信息可以在trpc的路由中使用
export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  // 从clerk 中获取userid
  const data = await auth();
  return { clerkUserId: data.userId };
});
// Awaited 是ts 4.5 引入的类型,用于获取Promise 解析后的类型
export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

// 创建trpc实例,并指定上下文类型
const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async function isAuthed(opts) {
   const { ctx } = opts;

  if (!ctx.clerkUserId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: `没有clerkUserId:${ctx.clerkUserId}`,
    });
  }

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, ctx.clerkUserId))
    .limit(1);


  const { success } = await ratelimit.limit(ctx.clerkUserId);
  if (!success) {
    throw new TRPCError({
      code: "TOO_MANY_REQUESTS",
      message: "请求过于频繁",
    });
  }

  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "没有查到用户",
    });
  }
  return opts.next({
    ctx: {
      ...ctx,
      user,
    },
  });
});

import { HydrateClient, trpc } from "@/trpc/server";

import { HomeView } from "@/modules/home/ui/views/home-view";

// 这行代码用于配置 Next.js 的页面渲染行为
// force-dynamic 表示强制页面在每次请求时都重新渲染
// 这样可以确保页面内容始终是最新的，但会牺牲一些性能
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    categoryId: string;
  }>
}

const Page = async ({ searchParams }: PageProps) => {
  const { categoryId} = await searchParams;
  void trpc.category.getMany.prefetch();
  
  return (
    // HydrateClient 用于在客户端渲染时提供 TRPC 客户端的上下文
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
};

export default Page;
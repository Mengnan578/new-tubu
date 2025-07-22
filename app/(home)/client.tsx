"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "shuaidawang" });
  return <>Client component say : {data?.greeting}</>;
};

// 'use client'

// import { trpc } from '@/trpc/client';

// export default function Home() {

//   const { data } = trpc.hello.useQuery({ text: 'hello' });

//   return (
//     <>
//       Client component say : { data?.greeting }
//     </>
//   );
// }

// tracking-tight 用来控制字间距

import { HydrateClient, trpc } from "@/trpc/server";

import { PageClient } from "./client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export default async function Home() {
  // const data = await trpc.hello({ text: 'wangfq de trpc' });

  void trpc.hello.prefetch({ text: "wangfq de trpc" });
  return (
    <>
      {/* Server component say : { data?.greeting } */}
      <HydrateClient>
        <Suspense fallback={<div>Loading。。。</div>}>
          <ErrorBoundary fallback={<div>Error。。。</div>}>
            <PageClient />
          </ErrorBoundary>
        </Suspense>
      </HydrateClient>
    </>
  );
}

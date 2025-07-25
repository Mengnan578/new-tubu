"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.category.getMany.useSuspenseQuery();
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

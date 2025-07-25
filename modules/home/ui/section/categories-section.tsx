"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary
        fallbackRender={({ error }) => <p>Error: {error.message}</p>}
      >
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({
  categoryId,
}: CategoriesSectionProps) => {
  const [categories] = trpc.category.getMany.useSuspenseQuery();
  console.log(categoryId);
  return <div>{JSON.stringify(categories)}</div>;
};

"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { FilterCarousel } from "@/components/filter-carousel";

import { useRouter } from "next/navigation";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSectionLoading />}>
      <ErrorBoundary
        fallbackRender={({ error }) => <p>Error: {error.message}</p>}
      >
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionLoading = () => {
  return (
    <FilterCarousel
      data={[]}
      value={null}
      isLoading={true}
      onSelect={() => {}}
    />
  );
};

const CategoriesSectionSuspense = ({
  categoryId,
}: CategoriesSectionProps) => {
  const route = useRouter();
  const [categories] = trpc.category.getMany.useSuspenseQuery();
  const data = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }
    route.push(url.toString());
  };

  return (
    <FilterCarousel
      data={data}
      value={categoryId}
      isLoading={false}
      onSelect={onSelect}
    />
  );
};

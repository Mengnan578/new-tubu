"use client";

import { trpc } from "@/trpc/client";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  const [categories] = trpc.category.getMany.useSuspenseQuery();
  console.log(categoryId);
  return (
    <div>
      {
        JSON.stringify(categories)
      }
    </div>
  );
};
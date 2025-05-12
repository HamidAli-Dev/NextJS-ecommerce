import React from "react";
import { format } from "date-fns";

import CategoryClient from "./components/category-client";
import prismadb from "@/lib/prismadb";
import { CategoryColum } from "./components/columns";

interface CategoriesPageProps {
  params: { storeId: string };
}

const CategoriesPage = async ({ params }: CategoriesPageProps) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColum[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard?.label,
    createdAt: format(category.createdAt, "MMMM dd, yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;

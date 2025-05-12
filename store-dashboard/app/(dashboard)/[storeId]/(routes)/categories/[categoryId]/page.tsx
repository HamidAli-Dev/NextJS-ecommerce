import React from "react";

import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/category-form";

interface CategoryProps {
  params: { categoryId: string; storeId: string };
}

const Category = async ({ params }: CategoryProps) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billBoard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <CategoryForm initialData={category} billboards={billboards} />
      </div>
    </div>
  );
};

export default Category;

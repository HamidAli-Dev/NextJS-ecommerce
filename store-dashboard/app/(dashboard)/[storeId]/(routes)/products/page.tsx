import React from "react";
import { format } from "date-fns";

import ProductClient from "./components/products-client";
import prismadb from "@/lib/prismadb";
import { ProductColum } from "./components/columns";
import { formatter } from "@/lib/utils";

interface ProductsPageProps {
  params: { storeId: string };
}

const ProductsPage = async ({ params }: ProductsPageProps) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColum[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category.name,
    size: product.size.name,
    color: product.color.value,
    isArchived: product.isArchived,
    isFeatured: product.isFeatured,
    // in prisma price is stored as decimal, but our column needs string so we need to convert it to string
    price: formatter.format(product.price.toNumber()),
    // in prisma date is stored as date object, but our column needs string so we need to convert it to string
    createdAt: format(product.createdAt, "MMMM dd, yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;

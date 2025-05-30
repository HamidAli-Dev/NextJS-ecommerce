import React from "react";

import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/shared/container";
import Filter from "@/components/filter";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import NoResults from "@/components/shared/no-results";
import ProductCard from "@/components/shared/product-card";
import MobileFilters from "@/components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    categoryId: params.categoryId,
  });

  const category = await getCategory(params.categoryId);
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter name="Sizes" valueKey="sizeId" data={sizes} />
              <Filter name="Colors" valueKey="colorId" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;

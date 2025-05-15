"use client";

import React from "react";
import ProductForm from "./product-form";

interface SerializedImage {
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

interface SerializedProduct {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  colorId: string;
  sizeId: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  images: SerializedImage[];
}

interface SerializedCategory {
  id: string;
  name: string;
  storeId: string;
  billboardId: string;
  createdAt: string;
  updatedAt: string;
}

interface SerializedSize {
  id: string;
  name: string;
  value: string;
  storeId: string;
  createdAt: string;
  updatedAt: string;
}

interface SerializedColor {
  id: string;
  name: string;
  value: string;
  storeId: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductFormWrapperProps {
  product: SerializedProduct | null;
  categories: SerializedCategory[];
  sizes: SerializedSize[];
  colors: SerializedColor[];
}

const ProductFormWrapper: React.FC<ProductFormWrapperProps> = ({
  product,
  categories,
  sizes,
  colors,
}) => {
  return (
    <ProductForm
      initialData={product}
      categories={categories}
      sizes={sizes}
      colors={colors}
    />
  );
};

export default ProductFormWrapper; 
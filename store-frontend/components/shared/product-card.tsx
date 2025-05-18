"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/shared/icon-button";
import Currency from "@/components/shared/currency";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(product);
  };

  const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="bg-white rounded-xl p-3 space-y-4 border group cursor-pointer"
      onClick={handleClick}
    >
      {/* Image and Actions */}
      <div className="aspect-square rounded-xl bg-gray-300 relative">
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 transition w-full px-6">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />{" "}
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-lg text-gray-500">{product.category.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;

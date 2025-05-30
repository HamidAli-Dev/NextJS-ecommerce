"use client";
import React, { useEffect, useState } from "react";
import Button from "./shared/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const card = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2 cursor-pointer"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {card.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;

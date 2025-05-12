import React from "react";
import { format } from "date-fns";

import SizesClient from "./components/sizes-client";
import prismadb from "@/lib/prismadb";
import { SizeColum } from "./components/columns";

interface SizesPageProps {
  params: { storeId: string };
}

const SizesPage = async ({ params }: SizesPageProps) => {
  const Sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColum[] = Sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, "MMMM dd, yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;

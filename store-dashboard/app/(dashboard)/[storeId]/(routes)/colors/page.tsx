import React from "react";
import { format } from "date-fns";

import ColorsClient from "./components/colors-client";
import prismadb from "@/lib/prismadb";
import { ColorColum } from "./components/columns";

interface ColorsPageProps {
  params: { storeId: string };
}

const ColorsPage = async ({ params }: ColorsPageProps) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColum[] = colors.map((color) => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: format(color.createdAt, "MMMM dd, yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;

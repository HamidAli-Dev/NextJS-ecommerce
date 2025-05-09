import React from "react";
import { format } from "date-fns";

import BillBoardClient from "./components/billboard-client";
import prismadb from "@/lib/prismadb";
import { BillboardColum } from "./components/columns";

interface BillboardsPageProps {
  params: { storeId: string };
}

const BillboardsPage = async ({ params }: BillboardsPageProps) => {
  const billboards = await prismadb.billBoard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColum[] = billboards.map((billboard) => ({
    id: billboard.id,
    label: billboard.label,
    // in prisma date is stored as date object, but our column needs string so we need to convert it to string
    createdAt: format(billboard.createdAt, "MMMM dd, yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillBoardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;

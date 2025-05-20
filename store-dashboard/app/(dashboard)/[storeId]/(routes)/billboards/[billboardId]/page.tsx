import React from "react";
import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/billboard-form";

type Props = {
  params: {
    billboardId: string;
    storeId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BillboardPage({ params }: Props) {
  const billboard = await prismadb.billBoard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  
  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}

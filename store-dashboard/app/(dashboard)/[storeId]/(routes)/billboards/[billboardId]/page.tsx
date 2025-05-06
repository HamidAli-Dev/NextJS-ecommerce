import React from "react";

import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/billboard-form";

interface BillboardProps {
  params: { billboardId: string };
}

const Billboard = async ({ params }: BillboardProps) => {
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
};

export default Billboard;

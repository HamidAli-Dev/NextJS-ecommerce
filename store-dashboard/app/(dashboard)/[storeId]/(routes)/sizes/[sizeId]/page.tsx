import React from "react";

import prismadb from "@/lib/prismadb";
import SizeForm from "./components/size-form";

interface SizeProps {
  params: { sizeId: string };
}

const Size = async ({ params }: SizeProps) => {
  const Size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SizeForm initialData={Size} />
      </div>
    </div>
  );
};

export default Size;

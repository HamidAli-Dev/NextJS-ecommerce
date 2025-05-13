import React from "react";

import prismadb from "@/lib/prismadb";
import ColorForm from "./components/color-form";

interface ColorProps {
  params: { colorId: string };
}

const Color = async ({ params }: ColorProps) => {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default Color;

import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
import React from "react";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="flex flex-col p-4">
      <h3>
        Store Name:{" "}
        <span className="bg-emerald-400 text-emerald-800 px-2">
          {store?.name}
        </span>
      </h3>
    </div>
  );
};

export default DashboardPage;

import React from "react";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const { storeId } = params;

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
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
          {store.name}
        </span>
      </h3>
    </div>
  );
};

export default DashboardPage;

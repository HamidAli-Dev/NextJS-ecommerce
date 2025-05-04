import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

const SetupLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  // redirect user to store dashboard if store exists
  if (store) {
    redirect(`/${store.id}`);
  }

  // redirect user to store creation page if store does not exist
  return <>{children}</>;
};

export default SetupLayout;

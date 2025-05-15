"use client";
import React from "react";

import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColum, columns } from "./columns";
import { DataTable } from "@/components/data-table";

interface OrderClientProps {
  data: OrderColum[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders ${data?.length}`}
        description="Manage Orders for your store"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;

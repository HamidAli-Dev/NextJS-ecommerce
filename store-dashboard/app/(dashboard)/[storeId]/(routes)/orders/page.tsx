import React from "react";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { OrderColum } from "./components/columns";
import { formatter } from "@/lib/utils";
import OrderClient from "./components/orders-client";

interface OrdersPageProps {
  params: { storeId: string };
}

const OrdersPage = async ({ params }: OrdersPageProps) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColum[] = orders.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    isPaid: order.isPaid ? "Yes" : "No",
    products: order.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatter.format(
      order.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),

    // in prisma date is stored as date object, but our column needs string so we need to convert it to string
    createdAt: format(order.createdAt, "MMMM dd, yyyy"),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;

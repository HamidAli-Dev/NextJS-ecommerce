"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColum = {
  id: string;
  phone: string;
  address: string;
  isPaid: string;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColum>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];

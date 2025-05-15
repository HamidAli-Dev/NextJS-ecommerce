"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductColum, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import ApiList from "@/components/api-list";

interface ProductClientProps {
  data: ProductColum[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products ${data?.length}`}
          description="Manage Products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API Calls for Products" />
      <Separator />
      <ApiList entityName="products" entityNameId="productId" />
    </>
  );
};

export default ProductClient;

"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SizeColum, columns } from "./columns";
import { DataTable } from "@/components/data-table";
import ApiList from "@/components/api-list";

interface SizeClientProps {
  data: SizeColum[];
}

const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes ${data?.length}`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API Calls for Sizes" />
      <Separator />
      <ApiList entityName="sizes" entityNameId="sizeId" />
    </>
  );
};

export default SizeClient;

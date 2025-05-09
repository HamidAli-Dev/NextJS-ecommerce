"use client";

import React from "react";
import { useParams } from "next/navigation";
import ApiAlert from "./api-alert";
import useOrigin from "@/hooks/use-origin";

interface ApiListProps {
  entityName: string;
  entityNameId: string;
}

const ApiList: React.FC<ApiListProps> = ({ entityName, entityNameId }) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityNameId}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityNameId}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityNameId}}`}
      />
    </>
  );
};

export default ApiList;

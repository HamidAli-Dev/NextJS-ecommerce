"use client";
import React, { useEffect, useState } from "react";

import { formatter } from "@/utils";

interface CurrencyProps {
  value?: number | string;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-bold">{formatter.format(Number(value))}</div>;
};

export default Currency;

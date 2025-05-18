"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";

import Button from "./shared/button";
import { Color, Size } from "@/types";
import IconButton from "./shared/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="lg:hidden flex items-center gap-px" onClick={onOpen}>
        Filters <Plus size={20} />
      </Button>

      <Dialog
        as="div"
        className="lg:hidden relative z-40"
        open={open}
        onClose={onClose}
      >
        {/* Background color & opacity */}
        <div className="fixed inset-0 bg-black opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;

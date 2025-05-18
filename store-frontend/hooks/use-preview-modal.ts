import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalState {
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
  data?: Product;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  onOpen: (data: Product) => set({ isOpen: true, data: data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;

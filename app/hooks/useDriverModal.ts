import { create } from 'zustand';

// ESTO NO HACE NADA AUN
interface IUseDriverModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDriverModal = create<IUseDriverModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDriverModal;

import { create } from "zustand";

interface DrawerState {
  openDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
}

const drawer = create<DrawerState>((set) => ({
  openDrawer: false,
  setOpenDrawer: (value) => set(() => ({ openDrawer: value })),
}));

const store = {
  drawer,
};

export default store;

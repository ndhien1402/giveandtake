import Header from "./Header";
import SideBar from "./SideBar";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import store from "../../lib/zustand";
const UserLayout = (props: { children: React.ReactNode }) => {
  const { openDrawer, setOpenDrawer } = store.drawer();

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Header />
      <Drawer isOpen={openDrawer} onClose={onCloseDrawer} placement="left">
        <DrawerOverlay backgroundColor={"#fff"} opacity={"0.2 !important"} />
        <DrawerContent backgroundColor={"color.bg"}>
          <DrawerCloseButton />
          <DrawerBody>
            <SideBar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <div className="flex">
        <Box
          className="w-[300px] hidden md:block h-[calc(100vh-56px)]"
          borderRight={"1px"}
          borderColor={"color.border"}
        >
          <SideBar />
        </Box>
        <Box className="w-full md:px-16">{props.children}</Box>
      </div>
    </>
  );
};

export default UserLayout;

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
import BackTop from "components/BackTop";
import { motion, AnimatePresence } from "framer-motion";

const UserLayout = (props: { children: React.ReactNode }) => {
  const { openDrawer, setOpenDrawer } = store.drawer();

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Box>
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
        <Box className="w-[300px] min-w-[250px] hidden md:block h-[calc(100vh-56px)]">
          <Box
            className="fixed min-w-[250px] h-[calc(100vh-56px)]"
            borderRight={"1px"}
            borderColor={"color.border"}
          >
            <SideBar />
          </Box>
        </Box>
        <Box className="w-full md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${Math.random()}`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {props.children}
            </motion.div>
          </AnimatePresence>
        </Box>
      </div>
      <BackTop />
    </Box>
  );
};

export default UserLayout;

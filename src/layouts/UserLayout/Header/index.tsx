import { Avatar, AvatarBadge, AvatarGroup, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbBrandMessenger } from "react-icons/tb";
import store from "../../../lib/zustand";

const Header = () => {
  const { setOpenDrawer } = store.drawer();
  const handleOpenSidebar = () => {
    setOpenDrawer(true);
  };
  return (
    <Box className="h-[56px]">
      <Box
        as="header"
        className="fixed top-0 left-0 right-0 z-10 border-b-[1px] border-[#a8b3cf33] h-[56px] flex items-center justify-between px-3"
        backgroundColor={"color.bg"}
      >
        <HamburgerIcon
          className="md:!hidden cursor-pointer"
          boxSize={5}
          onClick={handleOpenSidebar}
        />
        <h1 className="text-2xl font-bold">Web rác</h1>
        <div className="flex items-center gap-4">
          <TbBrandMessenger size={28} />
          <IoNotificationsOutline size={28} />
          <Avatar
            size="sm"
            name="Nguyen Dinh Hien"
            src="https://bit.ly/dan-abramov"
          />
        </div>
      </Box>
    </Box>
  );
};

export default Header;

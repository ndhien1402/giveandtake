import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import { Avatar, Box } from "@chakra-ui/react";

const GiveItem = () => {
  return <h1 className="text-2xl text-center mt-10">coming soon</h1>;
};
export default GiveItem;
GiveItem.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import { Avatar, Box } from "@chakra-ui/react";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="relative w-full h-[50vh] rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={"https://wallpaperaccess.com/full/393511.jpg"}
          fill
          alt="background"
        />
      </div>
    </>
  );
};
export default Profile;
Profile.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

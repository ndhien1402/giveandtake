import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import { Avatar, Box, Button, Divider } from "@chakra-ui/react";
import Image from "next/image";
import { AiTwotoneEdit } from "react-icons/ai";

const Profile = () => {
  return (
    <Box className="mx-auto" maxWidth={"1200px"}>
      <div className="relative w-full h-[45vh] rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={"https://wallpaperaccess.com/full/393511.jpg"}
          fill
          alt="background"
        />
      </div>
      <div className="px-6 flex justify-between">
        <div className="flex items-center">
          <div className="w-[165px] h-[165px] mr-6 relative -top-8">
            <Avatar
              showBorder
              size={"full"}
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/339306136_1387133095162300_137799894178040451_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-blEQOhETYoAX8ZBnuB&_nc_oc=AQloZJpX0y9rxQAWU58LCdrL9PaQLBzWZiepqjLEg3ZBN4xQuRUfsV41zpEYQuh06Jo&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCWnSaeqeEsi2XKy7cAlVJAQpXkSwPa-E3wJx6GADBbZQ&oe=6475235E"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">Nđ Hiến</span>
            <span className="">admin</span>
          </div>
        </div>
        <div className="flex items-center">
          <Button
            leftIcon={<AiTwotoneEdit />}
            colorScheme="gray"
            variant="outline"
          >
            Chỉnh sửa trang cá nhân
          </Button>
        </div>
      </div>
      <Divider />
    </Box>
  );
};
export default Profile;
Profile.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

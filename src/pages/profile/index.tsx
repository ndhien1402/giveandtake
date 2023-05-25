import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import { Avatar, Box } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <div>profile</div>
    </>
  );
};
export default Profile;
Profile.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";

const Users = () => {
  return (
    <>
      <div className="text-center font-semibold text-2xl">Title</div>
    </>
  );
};
export default Users;
Users.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

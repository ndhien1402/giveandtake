import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import Users from "components/Admin/Users";

const UsersPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl">Quản lý thành viên</h2>
      <div className="mt-4">
        <Users />
      </div>
    </div>
  );
};
export default UsersPage;
UsersPage.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

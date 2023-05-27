import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";

const Setting = () => {
  return (
    <>
      <div className="text-center font-semibold text-2xl">Title</div>
    </>
  );
};
export default Setting;
Setting.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

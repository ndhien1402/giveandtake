import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";

const GiveItem = () => {
  return (
    <>
      <div className="text-center font-semibold text-2xl">Title</div>
    </>
  );
};
export default GiveItem;
GiveItem.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

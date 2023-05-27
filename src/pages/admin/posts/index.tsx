import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";

const Posts = () => {
  return (
    <>
      <div className="text-center font-semibold text-2xl">Title</div>
    </>
  );
};
export default Posts;
Posts.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

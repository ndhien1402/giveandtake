import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import Posts from "components/Admin/Posts";
const PostsPage = () => {
  return (
    <div>
      <div className="text-center font-semibold text-2xl">Quản lý bài viết</div>
      <div>
        <Posts />
      </div>
    </div>
  );
};
export default PostsPage;
PostsPage.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

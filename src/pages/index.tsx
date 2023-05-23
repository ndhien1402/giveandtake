import { ReactNode, useState } from "react";
import UserLayout from "layouts/UserLayout";
import PostCard from "components/PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import CreatePost from "components/CreatePost";

interface Posts {}
export default function Home() {
  const [posts, setPosts] = useState<Posts[]>(Array.from(Array(5)));

  const nextPage = () => {
    console.log("nextPage");
    setPosts((prev) => prev.concat(Array.from(Array(5))));
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <CreatePost />
        <InfiniteScroll
          className="w-full"
          dataLength={posts.length}
          next={nextPage}
          hasMore={true}
          loader={
            <div className="flex justify-center my-5">Đang tải . . .</div>
          }
        >
          {posts.map((post, index) => {
            return (
              <div key={index}>
                <PostCard post={post} />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;

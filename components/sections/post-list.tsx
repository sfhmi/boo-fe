import CardPost from "@/components/card/card-post";
import { Post } from "@/types/posts";
import { memo } from "react";
import PostItem from "./post-item";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="col-span-12 flex flex-col overflow-y-scroll md:col-span-7 lg:col-span-8 xl:col-span-9 xl:flex-row xl:overflow-y-auto">
      <div className="flex w-full flex-col gap-y-5 p-5 xl:w-[55.5555%] xl:overflow-y-auto xl:overflow-x-hidden">
        {posts?.map((item) => (
          <PostItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(PostList);

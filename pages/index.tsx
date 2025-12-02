import PostList from "@/components/sections/post-list";
import Tags from "@/components/tags";
import posts from "@/data/posts.json";
import { Post } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="grid h-[calc(100dvh-6rem)] grid-cols-12 md:h-[calc(100dvh-4rem)]">
      <Tags />
      {/* posts */}
      <PostList posts={posts} />
      {/* endpost */}
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      posts: posts.posts,
    },
  };
};

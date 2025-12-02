import { Post } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";
import { Fragment, memo } from "react";
import { ReactSVG } from "react-svg";

const CardPost = ({
  item,
  repliesHandler,
}: {
  item: Post;
  repliesHandler?: () => void;
}): React.ReactElement => {
  return (
    <Fragment>
      <div
        onClick={repliesHandler}
        className="false active:scale-99 group flex cursor-pointer flex-col gap-y-2 rounded-3xl px-5 py-4 shadow duration-500 hover:scale-105"
      >
        <div className="group/profile flex flex-row items-center gap-3">
          <Image src={item.user.avatar} alt="img" width="48" height="48" className="rounded-full" />
          <div className="flex w-fit flex-row flex-wrap gap-2">
            <Link href={"#"} className="rounded-full bg-orange-500 px-2.5 py-1">
              <p className="text-xs text-black">{item.user.mbti}</p>
            </Link>
            <Link
              href={"#"}
              className="bg-dark-500 group-hover/profile:scale-103 active:scale-99 cursor-pointer rounded-3xl rounded-full px-2.5 py-1 shadow-sm duration-500"
            >
              <p className="text-xs text-white">{item.user.zodiac}</p>
            </Link>
            <Link
              href={"#"}
              className="group-hover/profile:scale-103 active:scale-99 duration-501 flex cursor-pointer items-center gap-0 rounded-3xl rounded-full bg-teal-400/80 px-2.5 py-1 text-xs text-white shadow-sm shadow-[#13A6A23F]"
            >
              <p className="mb-0 text-xs text-white">{item.user.range[0]}</p>
              <ReactSVG src="/icons/icon-wing.svg" className="w-3" />
              <p className="mb-0 text-xs text-white">{item.user.range[1]}</p>
            </Link>
          </div>
        </div>
        <h2 className="text-primary-dark whitespace-pre-line text-start text-sm">
          {item.content.text}
        </h2>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row items-center gap-1">
            <Image
              width={24}
              height={24}
              src={"https://boo.world/icons/universe/dark/like.svg"}
              alt="like"
            />
            <p className="text-primary-dark text-xs">{item.stats.likes}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              width={24}
              height={24}
              src={"https://boo.world/icons/universe/dark/comment.svg"}
              alt="like"
            />
            <p className="text-primary-dark text-xs">{item.stats.comments}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              width={24}
              height={24}
              src={"https://boo.world/icons/universe/dark/dm.svg"}
              alt="like"
            />
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              width={24}
              height={24}
              src={"https://boo.world/icons/universe/dark/share.svg"}
              alt="like"
            />
          </div>
          <div className="flex flex-row items-center gap-1">
            <Image
              width={24}
              height={24}
              src={"https://boo.world/icons/universe/dark/award.svg"}
              alt="like"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(CardPost);

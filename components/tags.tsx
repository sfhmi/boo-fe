import Link from "next/link";
import { memo } from "react";

const Tags = ({
  menus,
}: {
  menus?: {
    tag: string;
    souls: number;
  }[];
}) => {
  return (
    <div className="pointer-events-none fixed z-10 col-span-5 h-[calc(100dvh-6rem)] w-4/5 w-full overflow-hidden opacity-0 duration-500 md:pointer-events-auto md:static md:h-full md:w-auto md:p-5 md:opacity-100 lg:col-span-4 xl:col-span-3">
      <div className="flex h-full flex-col items-center justify-center rounded-3xl px-3 text-center md:shadow">
        <h1 className="px-5 pt-5 text-xl font-medium">Tags List</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum esse nam expedita
        saepe consectetur, ipsa tempora architecto ipsum asperiores exercitationem maxime sapiente
        delectus ratione dolor ut repellat dolorum corporis.
      </div>
    </div>
  );
};

export default memo(Tags);

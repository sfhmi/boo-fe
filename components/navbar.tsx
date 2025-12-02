import Link from "next/link";
import { memo } from "react";

const MENU = [
  {
    label: "Home",
    icon: "planet",
    route: "/",
  },
  {
    label: "Match",
    icon: "heart",
    route: "/match",
  },
  {
    label: "Messages",
    icon: "chat",
    route: "/messages",
  },
  {
    label: "Profile",
    icon: "profile",
    route: "/profile",
  },
  {
    label: "Personality Database",
    icon: "users",
    route: "/personality-database",
  },
  {
    label: "Personality Tests",
    icon: "test",
    route: "/personality-tests",
  },
  {
    label: "Resources",
    icon: "resources",
    route: "/resources",
  },
];

const Navbar = () => {
  return (
    <nav className="scrollbar-hide lg:shadow-none fixed bottom-0 left-0 top-16 z-20 flex w-64 -translate-x-full transform flex-col justify-between overflow-y-scroll py-4 ps-5 transition-all duration-500 ease-in-out lg:translate-x-0">
      <div className="false flex flex-col gap-y-6 ps-1">
        {MENU.map((item) => (
          <Link href="/" key={item.label}>
            <div className="hover:scale-103 active:scale-99 flex w-fit items-center gap-x-4 duration-500">
              <p className="line-clamp-1 text-sm font-medium opacity-100 transition-opacity duration-200 ease-in-out">
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default memo(Navbar);

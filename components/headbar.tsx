const Headbar = () => {
  return (
    <div className="fixed left-0 top-0 z-30 flex h-16 w-full items-center gap-x-3 py-5 pe-5 ps-[1.375rem]">
      <div
        id="hamburger"
        className="active:scale-99 h-7 w-7 min-w-[28px] cursor-pointer duration-500 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path
            stroke="white"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M4 7h22M4 15h22M4 23h22"
            className="transition duration-500"
          />
        </svg>
      </div>

      <a id="booLogo" href="/">
        <p className="font-budokan active:scale-99 text-2xl duration-500 hover:scale-105">Boo</p>
      </a>

      <div className="relative flex flex-grow cursor-text flex-col justify-start rounded-3xl px-3.5 py-2 shadow">
        <button
          className="flex cursor-text items-center gap-x-2 focus-visible:outline-none"
          id="searchInterests"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <div className="min-w-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              fill="none"
              className="stroke-primary-dark duration-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m17.5 17.941-3.625-3.625m1.958-4.708a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"
              />
            </svg>
          </div>
          <p className="text-gray text-sm">Search</p>
        </button>
      </div>

      <div className="relative">
        <div className="active:scale-99 cursor-pointer duration-500 hover:scale-105">
          <div className="relative" id="notificationsIcon" style={{ width: 28, height: 28 }}>
            <div className="absolute" style={{ opacity: 1 }}>
              <img
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                src="/icons/universe/dark/notification.svg"
                style={{ color: "transparent" }}
                alt="Notification"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        className="hover:scale-103 active:scale-99 hidden cursor-pointer items-center gap-x-1 duration-500 md:flex"
        href="/account/coins"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          fill="none"
          className="w-[1.7rem]"
        >
          <g clipPath="url(#coinsClip)">
            <path
              fill="#000"
              stroke="#fff"
              strokeWidth="0.7"
              d="M9 17.37A8.37 8.37 0 1 0 9 .63a8.37 8.37 0 0 0 0 16.74ZM15.588 9A6.587 6.587 0 1 1 2.412 9a6.587 6.587 0 0 1 13.175 0Z"
            />
            <path
              fill="#F2C041"
              d="M15.937 9A6.937 6.937 0 1 1 2.062 9a6.937 6.937 0 0 1 13.875 0Z"
            />
            <path fill="#EF9636" d="M9 15.937A6.938 6.938 0 0 0 9 2.063v13.874Z" />
            <circle cx="9" cy="9.001" r="5.087" fill="#F8DE63" />
          </g>
          <defs>
            <clipPath id="coinsClip">
              <path fill="#fff" d="M0 0h18v18H0z" />
            </clipPath>
          </defs>
        </svg>
        <p className="font-medium">385</p>
      </a>

      <div className="hidden md:block">
        <div className="relative text-left">
          <button
            className="group flex cursor-pointer items-center gap-x-3"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="relative h-10 w-10">
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2">
                <svg className="CircularProgressbar" viewBox="0 0 100 100">
                  <path
                    className="CircularProgressbar-trail"
                    style={{
                      stroke: "rgba(0, 0, 0, 0)",
                      strokeLinecap: "round",
                      strokeDasharray: "289.0265px 289.0265px",
                      strokeDashoffset: "0px",
                    }}
                    d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                    strokeWidth="8"
                    fillOpacity="0"
                  />
                  <path
                    className="CircularProgressbar-path"
                    style={{
                      stroke: "rgba(78, 220, 216, 1)",
                      strokeLinecap: "round",
                      strokeDasharray: "289.0265px 289.0265px",
                      strokeDashoffset: "171.274px",
                    }}
                    d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                    strokeWidth="8"
                    fillOpacity="0"
                  />
                </svg>
              </div>

              <img
                alt="Fahmi"
                decoding="async"
                className="rounded-full object-cover"
                src="https://images.prod.boo.dating/zTm69y7oeod4dYH3DNVzECE4ulp2/1696511308476bda86fbf47157e9d763a1cc3fdb0038f.jpg/sm.webp"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />

              <div className="text-2xs font-budokan absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-accent px-1.5 font-medium">
                41%
              </div>
            </div>

            <p className="font-medium">Fahmi</p>

            <div className="h-2.5 w-2.5 rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 13"
                className="fill-gray duration-500 group-hover:fill-accent"
              >
                <path d="M10.616 4.81c-.057-.058-.274-.303-.475-.505C8.959 3.037 5.893.977 4.294.357c-.243-.1-.857-.31-1.183-.32-.313.004-.61.08-.893.23a1.874 1.874 0 0 0-.783.914c-.097.264-.242 1.053-.242 1.067C1.048 3.111.98 4.511 1 6.057c.019 1.473.122 2.814.26 3.686.016.014.184.99.359 1.322.32.608.936.98 1.59.972l.056-.001c.426-.02 1.316-.412 1.316-.426 1.497-.662 4.44-2.697 5.616-4.04 0 0 .332-.345.475-.56.224-.308.332-.689.327-1.068a1.875 1.875 0 0 0-.384-1.133Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headbar;

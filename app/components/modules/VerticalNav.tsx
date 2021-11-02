import { useRouter } from "next/dist/client/router";
import React from "react";

// const VerticalNavItem = () => {
//   return (

//   );
// };

export default function VerticalNav() {
  const router = useRouter();
  return (
    <div
      className="fixed left-10 top-40 h-[400px] w-20 
      rounded-[20px] box-shadow
      flex flex-col justify-between py-4 items-center
      "
    >
      <div className="flex flex-col items-center gap-2 pt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${router.pathname === "/" && "tab--active"} tab`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${router.pathname === "/bookmark" && "tab--active"} tab`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z"></path>
          <path d="M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            router.pathname === "/collection" && "tab--active"
          } tab`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 6h14v2H5zm2-4h10v2H7z"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-12 w-12 p-2 text-gray-500"
        >
          <path d="M21.546 11.646 19 9.101V5.5a.5.5 0 0 0-.5-.5h-3.601l-2.546-2.546a.5.5 0 0 0-.707 0L9.101 5H5.5a.5.5 0 0 0-.5.5v3.601l-2.546 2.546a.5.5 0 0 0 0 .707L5 14.899V18.5a.5.5 0 0 0 .5.5h3.601l2.546 2.546a.5.5 0 0 0 .707 0L14.899 19H18.5a.5.5 0 0 0 .5-.5v-3.601l2.546-2.546a.5.5 0 0 0 0-.707zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
        </svg>
      </div>
    </div>
  );
}

import { blogAPI } from "app/api/modules/blogAPI";
import React, { useState } from "react";

export default function BookmarkButton({ hasBookmarked, blogId }) {
  const [hasActive, setHasActive] = useState(hasBookmarked);
  const handleClick = async () => {
    if (!hasActive) {
      const res = await blogAPI.bookmark(blogId);
      if (res.status === 200) {
        setHasActive(true);
      }
    } else {
      const res = await blogAPI.unBookmark(blogId);
      if (res.status === 200) {
        setHasActive(false);
      }
    }
  };
  return (
    <div
      className={`${
        hasActive ? "text-yellow-400 " : "text-gray-400"
      } hover:text-yellow-400 hover:bg-yellow-100 flex items-center gap-1 
      rounded-lg group cursor-pointer`}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 p-1"
      >
        <path
          d="M7.828 4h8.343a2 2 0 011.996 1.878l.83 13.591a.5.5 0 01-.795.433l-5.608-4.144a1 1 0 00-1.189 0l-5.608 4.144a.5.5 0 01-.796-.433l.83-13.591A2 2 0 017.829 4z"
          fill="currentcolor"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

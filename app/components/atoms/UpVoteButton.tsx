import { blogAPI } from "app/api/modules/blogAPI";
import React, { useState } from "react";

export default function UpVoteButton({ value, hasUpVoted, blogId }) {
  const [hasActive, setHasActive] = useState(hasUpVoted);
  const [numberOfUpVote, setNumberOfUpVote] = useState(value);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    if (!hasActive) {
      const res = await blogAPI.upVote(blogId);
      if (res.status === 200) {
        setHasActive(true);
        setNumberOfUpVote(numberOfUpVote + 1);
      }
    } else {
      const res = await blogAPI.unUpVote(blogId);
      if (res.status === 200) {
        setHasActive(false);
        setNumberOfUpVote(numberOfUpVote - 1);
      }
    }
    setIsLoading(false);
  };
  return (
    <div
      className={`${
        hasActive ? "text-green-400 " : "text-gray-400"
      } flex items-center gap-1 group cursor-pointer 
      ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
      `}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 p-1 hover:text-green-400 hover:bg-green-100  rounded-lg"
        viewBox="0 0 24 24"
        fill="currentcolor"
      >
        <path d="M13.162 3.813a2 2 0 01.465.465l6.674 9.343a1 1 0 01-1.102 1.539l-4.032-1.21a1 1 0 00-1.277.816l-.767 5.375a1 1 0 01-.99.859h-.266a1 1 0 01-.99-.859l-.767-5.375a1 1 0 00-1.278-.816l-4.031 1.21a1 1 0 01-1.102-1.54l6.674-9.342a2 2 0 012.79-.465z"></path>
      </svg>
      <p className="group-hover:text-green-200">{numberOfUpVote}</p>
    </div>
  );
}

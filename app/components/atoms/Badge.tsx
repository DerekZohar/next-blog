import React from "react";

export default function Badge({ content }) {
  return (
    <span className="px-2 py-1 rounded-full text-white text-xs font-medium bg-blue-500 cursor-pointer">
      {content}
    </span>
  );
}

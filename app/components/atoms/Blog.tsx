import React from "react";
import Badge from "./Badge";

export default function Blog() {
  return (
    <div className="w-full h-52 bg-white rounded-2xl flex gap-4 p-3">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-thumb.jpg"
        alt=""
        className="h-full w-52 rounded-2xl"
      />
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">
            React Context and React-Tracked
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </div>
        <p className="text-xs font-medium text-gray-400">Oct 12, 2021</p>
        <p className="line-clamp-3">
          This article is a follow up on my previous article, which explained
          how i used React Hooks with context to manage application state. This
          article will focus on the downside of context and how React-Tracked
          can help improve application performance.
        </p>
        <hr className="" />
        <div className="flex gap-2 items-center">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-thumb.jpg"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-base font-semibold">Athena</p>
            <p className="text-xs font-medium text-gray-400">102+ blogs</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Badge content="ReactJs" />
            <Badge content="Context" />
          </div>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <p className="font-medium">1,231</p>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <p className="font-medium">1,231</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

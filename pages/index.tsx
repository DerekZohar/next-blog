import Blog from "app/components/atoms/Blog";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-between gap-4 p-2">
      <div className="flex-1 p-2">
        <p className="text-2xl font-semibold text-center">
          Blog<span className="text-blue-500">Alley</span>
        </p>

        <div className="flex flex-col gap-1 mt-8">
          <div className="tab tab--active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <p>Home</p>
          </div>
          <div className="tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <p>Posted Blogs</p>
          </div>
          <div className="tab">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            <p>Saved Blogs</p>
          </div>
        </div>
      </div>

      <div className=" w-3/5 ">
        <div className="flex gap-2 px-4 py-4 bg-white rounded-xl">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="focus:outline-none w-full"
            placeholder="Search by name, tab"
          />
        </div>

        <div className="flex justify-between px-1 mt-4">
          <p>12,322 results</p>
          <p>Sort</p>
        </div>
        <div className="flex flex-col gap-4  w-full h-full ">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>

      <div className="flex-1"></div>
    </div>
  );
}

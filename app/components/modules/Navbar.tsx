import router from "next/dist/client/router";
import React from "react";
export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-14 py-4">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-14 w-14 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div
          className="flex items-center h-10 w-[400px] px-4  gap-4 ml-24
      border border-gray-200 rounded-full bg-gray-50
      focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent"
        >
          {/* search icon */}
          <svg
            className="h-4 w-4 fill-current text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
          {/* search input */}
          <input
            className="h-6 w-full text-gray-600 bg-gray-50 focus:outline-none focus:shadow-outline
          placeholder-gray-400"
            type="text"
            placeholder="Search by keyword"
          />
        </div>
      </div>
      <div className="flex gap-4">
        {/* notification icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 p-2 bg-gray-100 rounded-full cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-thumb.jpg"
          alt="Avatar"
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}

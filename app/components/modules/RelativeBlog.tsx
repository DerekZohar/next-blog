import React from "react";

export default function RelativeBlog() {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-thumb.jpg"
            alt=""
            className="rounded-full h-6 w-6 object-cover"
          />
          <p className="text-base font-semibold text-blue-400">Andrea</p>
        </div>
        <p className="text-lg font-semibold leading-6">
          The Truth About Twitter Growth
        </p>
        <div className="flex gap-2 text-sm text-gray-400">
          <p className="uppercase ">Business</p>
          <p className="">|</p>
          <p className="">September 29, 2021</p>
        </div>
      </div>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/214/442/543/digital-art-son-goku-dragon-ball-dragon-ball-z-island-hd-wallpaper-thumb.jpg"
        alt=""
        className="rounded-lg h-20 w-20 object-cover"
      />
    </div>
  );
}

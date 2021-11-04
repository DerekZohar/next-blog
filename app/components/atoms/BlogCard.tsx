import React from "react";

export default function BlogCard({ imageUrl, tag, title, description }) {
  return (
    //   w-[350px] h-[360px]
    <div className="rounded-2xl box-shadow ">
      <div className="w-full h-40 overflow-hidden rounded-t-2xl ">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover transform hover:scale-150 transition duration-500 ease"
        />
      </div>
      {/* <div className="img-hover-zoom">
        <img src={imageUrl} alt="This zooms-in really well and smooth" />
      </div> */}
      <div className="p-4 flex flex-col gap-2">
        <p className="uppercase text-xs font-bold text-red-500">{tag}</p>
        <p className="line-clamp-2 text-xl font-semibold h-14">{title}</p>
        <p className="line-clamp-3 text-gray-400">{description}</p>
      </div>
    </div>
  );
}

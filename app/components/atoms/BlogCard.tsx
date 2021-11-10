import React from "react";
import Tag from "./Tag";
import UpVoteButton from "./UpVoteButton";

export default function BlogCard({
  _id,
  imgUrl,
  tag,
  title,
  description,
  upVotedIds,
  hasUpVoted,
}) {
  return (
    //   w-[350px] h-[360px]
    <div className="rounded-2xl box-shadow ">
      <div className="w-full h-40 overflow-hidden rounded-t-2xl ">
        <img
          src={imgUrl || "https://via.placeholder.com/350x150"}
          alt=""
          className="w-full h-full object-cover transform hover:scale-150 transition duration-500 ease"
        />
      </div>
      {/* <div className="img-hover-zoom">
        <img src={imageUrl} alt="This zooms-in really well and smooth" />
      </div> */}
      <div className="p-4 flex flex-col justify-between gap-2">
        <p className="uppercase text-xs font-bold text-red-500">{tag}</p>
        <p className="line-clamp-2 text-xl font-semibold h-14">{title}</p>
        <p className="line-clamp-3 text-gray-400 h-18">{description}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}

        <div className="w-full flex justify-between">
          <UpVoteButton
            value={upVotedIds.length}
            hasUpVoted={hasUpVoted}
            blogId={_id}
          />
          <div className="hover:bg-green-100 text-green-400 rounded-lg cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hover:bg-yellow-200 text-yellow-400 rounded-lg cursor-pointer">
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
        </div>
      </div>
    </div>
  );
}

import router from "next/router";
import React from "react";
import BookmarkButton from "./BookmarkButton";
import DeleteBlogButton from "./DeleteBlogButton";
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
  hasBookmarked,
}) {
  return (
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
      <div className="p-4 h-[216px] flex flex-col justify-between gap-2">
        <p className="uppercase text-xs font-bold text-red-500">{tag}</p>
        <p className="line-clamp-2 text-xl font-semibold h-14 cursor-pointer">
          <a
            href={"/blog/" + _id}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            {title}
          </a>
        </p>
        <p className="line-clamp-3 text-gray-400 h-18">{description}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}

        <div className="w-full flex justify-between">
          <UpVoteButton
            value={upVotedIds === undefined ? 0 : upVotedIds.length}
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
          <BookmarkButton hasBookmarked={hasBookmarked} blogId={_id} />

          {router.pathname === "/collection" && (
            <div
              className="hover:bg-red-100 text-red-400 rounded-lg cursor-pointer"
              onClick={() => router.push(`/blog/${_id}/edit`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          )}
          {router.pathname === "/collection" && (
            <DeleteBlogButton blogId={_id} />
          )}
        </div>
      </div>
    </div>
  );
}

import { blogAPI } from "app/api/modules/blogAPI";
import RelativeBlog from "app/components/modules/RelativeBlog";
import moment from "moment";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

// {
//     tag,
//     title,
//     date,
//     content,
//     description,
//     author,
//   }
const AuthorInfo = (props) => {
  return (
    <div className="flex flex-row items-center w-[200px]">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={
          props?.avatarUrl ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCpP-uQHlUh9W-8BIveOO58Mpj5tBgNf_PHwKGn4d8OluxjLMstNw1w4DYSGfY3n8VJ8&usqp=CAU"
        }
        alt="author"
      />
      <div className="flex flex-col">
        <div className="flex gap-2">
          <p className="text-sm font-bold text-gray-600">{props?.fullName}</p>
          {/* <button className="px-2 bg-blue-600 text-white text-xs rounded-full">
            Follow+
          </button> */}
        </div>
        <p className="text-xs font-bold text-gray-400">
          Published on {moment(props.createdAt).format("MMM Do YY")}
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { id: params.id },
  };
};

export default function BlogDetail(props) {
  const [blogInfo, setBlogInfo] = useState<any>({});
  const commentRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await blogAPI.getBlogById(props.id);
      if (res.status === 200) setBlogInfo(res.data);
    };
    fetchData();
  }, []);

  const handleScrollToCommentSection = () => {
    if (commentRef && commentRef.current)
      window.scrollTo({
        top: commentRef.current.offsetTop,
        behavior: "smooth",
      });
  };

  const list = [1, 2, 3, 4];
  return (
    <div className="flex gap-16">
      <Head>
        <title>{blogInfo.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-2/3 flex flex-col gap-4">
        {/* <div>
        <p className="uppercase text-xs font-bold text-red-500">
          Business{" "}
          <span className="text-xs font-semibold text-gray-600">
            - 30 Jan 2021
          </span>
        </p>
      </div> */}
        <AuthorInfo {...blogInfo.author} />
        <p className="text-3xl font-bold">{blogInfo.title}</p>

        {blogInfo.imgUrl ? (
          <img
            src={blogInfo.imgUrl}
            alt=""
            className="w-full h-[500px] rounded-xl object-cover"
          />
        ) : (
          <div className="w-full h-[500px] rounded-xl bg-gray-200 animate-pulse"></div>
        )}
        <div dangerouslySetInnerHTML={{ __html: blogInfo.content }} />
        <div className="w-full flex items-center justify-center">
          <form className="w-full bg-white pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-200 rounded-xl  leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-600 ease-in-transition"
                  name="body"
                  placeholder="Type Your Comment"
                  required
                  // value={props.comment}
                  // onChange={(e) => props.setComment(e.target.value)}
                />
              </div>
              <div className="w-full md:w-full flex items-center px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    className="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xs text-red-400 md:text-sm pt-px">
                    Min 3 characters
                  </p>
                </div>

                <button
                  type="button"
                  className="py-2 px-6 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 
                focus:ring-offset-blue-200 text-white transition ease-in duration-200 
                text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                focus:ring-offset-2 rounded-full"
                >
                  Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="sticky top-10 h-full w-[350px] flex-1 flex flex-col gap-3 rounded-lg p-4 box-shadow">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <RelativeBlog />
              {index !== list.length - 1 && <hr className="my-2" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

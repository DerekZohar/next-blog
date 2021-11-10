import { blogAPI } from "app/api/modules/blogAPI";
import BlogCard from "app/components/atoms/BlogCard";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

export default function Collection() {
  const user = useSelector((state: any) => state.user);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await blogAPI.getMyBlogs({ page: 0, size: 10, keyword: "" });
      if (res.status === 200) {
        setBlogs(res.data);
      }
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const res = await blogAPI.getMyBlogs({
      page: page + 1,
      size: 10,
      keyword: "",
    });

    if (res.status === 200) {
      setBlogs([...blogs, ...res.data]);
      setPage(page + 1);
      setHasMore(res.data.length > 0);
    }
  };
  return (
    <div className="">
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center">
            <button className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600">
              Load more blogs...
            </button>
          </div>
        }
        scrollableTarget="scrollableDiv"
        className="grid grid-cols-3 gap-16 p-8"
      >
        {blogs.map((item, index) => (
          <BlogCard
            key={index}
            {...item}
            //     imageUrl="https://source.unsplash.com/random"
            //     tag="Business"
            //     title="Beautiful CSS box-shadow12333 123 123 123 12 3123 2"
            //     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            // tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            // veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            // commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            // velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            // occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            // mollit anim id est laborum."
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

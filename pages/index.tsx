import { blogAPI } from "app/api/modules/blogAPI";
import BlogCard from "app/components/atoms/BlogCard";
import Loading from "app/components/atoms/Loading";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state: any) => state.user);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await blogAPI.getAllBlogs({ page: 0, size: 9, keyword: "" });
      if (res.status === 200) {
        setBlogs(res.data);
      }
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const res = await blogAPI.getAllBlogs({
      page: page + 1,
      size: 9,
      keyword: "",
    });

    if (res.status === 200) {
      setBlogs([...blogs, ...res.data]);
      setPage(page + 1);
      setHasMore(res.data.length > 0);
    }
  };

  return (
    <div className="relative">
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loading />}
        scrollableTarget="scrollableDiv"
        className="grid grid-cols-3 gap-16 p-8"
      >
        {blogs.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

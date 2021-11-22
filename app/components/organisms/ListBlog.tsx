import { blogAPI } from "app/api/modules/blogAPI";
import BlogCard from "app/components/atoms/BlogCard";
import ListEmpty from "app/components/atoms/ListEmpty";
import Loading from "app/components/atoms/Loading";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { PopUp } from "../atoms/DeleteBlogButton";

export default function ListBlog({ type }) {
  const user = useSelector((state: any) => state.user);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);

  const [listEmpty, setListEmpty] = useState(false);
  const [hasMore, setHasMore] = useState(user.accessToken !== "");
  useEffect(() => {
    const fetchData = async () => {
      if (type === "bookmark") {
        const res = await blogAPI.getBookmarkBlogs(
          {
            page: 0,
            size: 9,
            keyword: "",
          },
          user.accessToken
        );
        if (res.status === 200) {
          setBlogs(res.data);
          if (res.data.length === 0) {
            setListEmpty(true);
          }
        }
      } else {
        const res = await blogAPI.getMyCollection({
          page: 0,
          size: 9,
          keyword: "",
        });
        if (res.status === 200) {
          setBlogs(res.data);
          if (res.data.length === 0) {
            setListEmpty(true);
          }
        }
      }
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    if (type === "bookmark") {
      const res = await blogAPI.getBookmarkBlogs(
        {
          page: page + 1,
          size: 9,
          keyword: "",
        },
        user.accessToken
      );
      if (res.status === 200) {
        setBlogs([...blogs, ...res.data]);
        setPage(page + 1);
        setHasMore(res.data.length > 0);
      }
    } else {
      const res = await blogAPI.getMyCollection({
        page: page + 1,
        size: 9,
        keyword: "",
      });
      if (res.status === 200) {
        setBlogs([...blogs, ...res.data]);
        setPage(page + 1);
        setHasMore(res.data.length > 0);
      }
    }
  };
  return (
    <div className="relative">
      {listEmpty && <ListEmpty />}
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchMoreData}
        hasMore={hasMore && !listEmpty}
        loader={<Loading />}
        scrollableTarget="scrollableDiv"
        className={"grid grid-cols-3 gap-16 p-8"}
      >
        {blogs.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

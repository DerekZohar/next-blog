import { blogAPI } from "app/api/modules/blogAPI";
import BlogCard from "app/components/atoms/BlogCard";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state: any) => state.user);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await blogAPI.getAllBlogs({});
      if (res.status === 200) {
        setBlogs(res.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-16">
      {blogs.map((item, index) => (
        <BlogCard
          key={index}
          imageUrl="https://source.unsplash.com/random"
          tag="Business"
          title="Beautiful CSS box-shadow12333 123 123 123 12 3123 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
        />
      ))}
    </div>
  );
}

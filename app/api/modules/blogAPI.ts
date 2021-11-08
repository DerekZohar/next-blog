import axios from "axios";
import axiosClient from "../axiosClient";

export const blogAPI = {
  getAllBlogs: (filters) => {
    return axiosClient.post("/blogs/getByFilter", filters);
  },
  getBlogById: (id) => {
    return axiosClient.get(`/blogs/${id}`);
  },
  getBookmarkBlogs: (filters) => {
    return axiosClient.post("/blogs/bookmarks", filters);
  },
  getMyBlogs: (filters) => {
    return axiosClient.post("/blogs/my", filters);
  },
  createBlog: (blog) => {
    return axiosClient.post("/blogs", blog);
  },
  updateBlog: (id, blog) => {
    return axiosClient.put(`/blogs/${id}`, blog);
  },
  deleteBlog: (id) => {
    return axiosClient.delete(`/blogs/${id}`);
  },
};

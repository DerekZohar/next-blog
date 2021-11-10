import axios from "axios";
import axiosClient from "../axiosClient";

export const blogAPI = {
  upVote: (id: string) => axiosClient.post("/blogs/up-vote/" + id),
  unUpVote: (id: string) => axiosClient.delete("/blogs/up-vote/" + id),
  bookmark: (id: string) => axiosClient.post("/blogs/bookmark/" + id),
  unBookmark: (id: string) => axiosClient.delete("/blogs/bookmark/" + id),
  getAllBlogs: (filters) => {
    return axiosClient.post("/blogs/all", filters);
  },
  getBlogById: (id) => {
    return axiosClient.get(`/blogs/${id}`);
  },
  getBookmarkBlogs: (filters) => {
    return axiosClient.post("/blogs/bookmarks", filters);
  },
  getMyCollection: (filters) => {
    return axiosClient.post("/blogs/collection", filters);
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

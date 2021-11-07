import axios from "axios";
import axiosClient from "../axiosClient";

export const blogAPI = {
  getAllBlogs: (filters) => {
    return axiosClient.post("/blogs/getByFilter", filters);
  },
  getAllBlogs1: (filters) => {
    return axios.post("http://localhost:5000/blogs/getByFilter", filters, {
      withCredentials: true,
    });
  },
  getBlogById: (token, id) => {
    return axiosClient.get(`/blogs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getBookmarkBlogs: (token, filters) => {
    return axiosClient.post("/blogs/bookmarks", filters, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getMyBlogs: (token, filters) => {
    return axiosClient.post("/blogs/my", filters, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  createBlog: (token, blog) => {
    return axiosClient.post("/blogs", blog, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  updateBlog: (token, id, blog) => {
    return axiosClient.put(`/blogs/${id}`, blog, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  deleteBlog: (token, id) => {
    return axiosClient.delete(`/blogs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

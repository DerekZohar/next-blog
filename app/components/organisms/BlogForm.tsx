import { blogAPI } from "app/api/modules/blogAPI";
import { imageAPI } from "app/api/modules/imageAPI";
import BlogTagSelection from "app/components/modules/BlogTagSelection";
import ImageSection from "app/components/modules/ImageSection";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import router from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

const FroalaEditorComponent = dynamic(
  async () => {
    const values = await Promise.all([
      import("react-froala-wysiwyg"), // must be first import since we are doing values[0] in return
      import("froala-editor/js/plugins/image.min.js"),
    ]);
    return values[0];
  },
  {
    loading: () => <p>LOADING!!!</p>,
    ssr: false,
  }
);

export default function BlogForm({ type }) {
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file !== undefined) {
      setImageFile(file);
      setPreviewSource(URL.createObjectURL(e.target.files[0]));
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      content: content,
      tags: [],
      imgUrl: "",
    },
    onSubmit: async (values) => {
      if (values.imgUrl === "") {
        const imageRes: any = await imageAPI.uploadImage(imageFile);
        const res = await blogAPI.createBlog({
          ...values,
          content,
          imgUrl: imageRes.data.url ? imageRes.data.url : "",
        });
        if (res.status === 201) {
          router.push("/" + res.data.id);
        }
      } else {
        const res = await blogAPI.createBlog({
          ...values,
          content,
        });
        if (res.status === 201) {
          router.push("/blog/" + res.data.id);
        }
      }
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
        bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base 
        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparen"
        placeholder="Title"
      />
      <BlogTagSelection />
      <ImageSection
        previewSource={previewSource}
        handleImageChange={handleImageChange}
        formik={formik}
      />
      <label className="text-gray-700">
        <textarea
          className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
          bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base 
          focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          id="description"
          placeholder="Enter your description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          rows={5}
          cols={40}
        ></textarea>
      </label>
      <FroalaEditorComponent
        tag="textarea"
        config={{
          placeholderText: "Edit Your Content Here!",
          charCounterCount: true,
        }}
        model={content}
        onModelChange={(model) => setContent(model)}
      />

      <button
        className="w-[200px] py-2 px-6 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 
                focus:ring-offset-blue-200 text-white transition ease-in duration-200 
                text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                focus:ring-offset-2 rounded-full"
        type="submit"
      >
        Post
      </button>
    </form>
  );
}

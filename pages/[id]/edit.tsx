import { blogAPI } from "app/api/modules/blogAPI";
import { imageAPI } from "app/api/modules/imageAPI";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const FroalaEditorComponent: React.ComponentType<any> = dynamic(
  () => {
    return new Promise((resolve) =>
      import("froala-editor/js/plugins.pkgd.min.js").then((e) => {
        import("react-froala-wysiwyg").then(resolve);
      })
    );
  },
  {
    loading: () => null,
    ssr: false,
  }
);

export const getServerSideProps = async ({ params }) => {
  // const res = await blogAPI.getByIdWithoutToken(parseInt(params.id));
  // if (res.status === 200) return { props: { ...res.data.data } };
  return {
    props: { id: params.id },
  };
};

export default function AddNewBlog(props) {
  // const blog = props.blogs[0];
  // const user = useSelector((state: any) => state.user);
  // const [content, setContent] = useState(blog.content);
  // const [imageFile, setImageFile] = useState(null);
  // const [previewSource, setPreviewSource] = useState(blog.imageUrl);
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImageFile(file);
  //   setPreviewSource(URL.createObjectURL(e.target.files[0]));
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     imageUrl: "",
  //     title: blog.title,
  //     description: blog.description,
  //     content: "",
  //     tags: [],
  //   },
  //   onSubmit: async (values) => {
  //     const imageRes: any = await imageAPI.uploadImage(imageFile);
  //     const res = await blogAPI.update(
  //       {
  //         id: blog.id,
  //         ...values,
  //         imageUrl: imageRes.data.url,
  //         content,
  //       },
  //       user.token
  //     );

  //     if (res.status === 200) console.log(res);
  //   },
  // });

  return (
    <form
      className="flex flex-col gap-4"
      // onSubmit={formik.handleSubmit}
    >
      {/* <DropFileInput /> */}

      {/* <div className="flex justify-between">
        <div></div>
      </div> */}

      {/* <BlogTagSelection /> */}
      <input
        type="text"
        id="title"
        name="title"
        // value={formik.values.title}
        // onChange={formik.handleChange}
        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
        bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base 
        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparen"
        placeholder="Title"
      />
      <img
        src={"https://via.placeholder.com/1225x500"}
        alt=""
        className="h-[100px] w-[245px] object-cover rounded-lg"
      />
      <input type="file" />
      <label className="text-gray-700">
        <textarea
          className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
          bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base 
          focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          id="description"
          placeholder="Enter your description"
          name="description"
          // value={formik.values.description}
          // onChange={formik.handleChange}
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
        // model={content}
        // onModelChange={(model) => setContent(model)}
      />

      <button
        className="w-[200px] py-2 px-6 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 
                focus:ring-offset-blue-200 text-white transition ease-in duration-200 
                text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 
                focus:ring-offset-2 rounded-full"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}

import React, { useState } from "react";

export default function ImageSection({
  previewSource,
  handleImageChange,
  formik,
}) {
  const [hasUploadActive, HasUploadActive] = useState(false);
  return (
    <div>
      <div className="mb-3">
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="Blue"
            checked={hasUploadActive}
            onChange={() => HasUploadActive(!hasUploadActive)}
            className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="Blue"
            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          />
        </div>
        <span className="text-gray-400 font-medium">Upload from Local</span>
      </div>
      {hasUploadActive ? (
        <div>
          <img
            src={previewSource || "https://via.placeholder.com/1134x160"}
            alt=""
            className="h-[100px] w-[245px] object-cover rounded-lg"
          />
          <input type="file" onChange={handleImageChange} />
        </div>
      ) : (
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          value={formik.values.imgUrl}
          onChange={formik.handleChange}
          className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
        bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base 
        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparen"
          placeholder="imgUrl"
        />
      )}
    </div>
  );
}

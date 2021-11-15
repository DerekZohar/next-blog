import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { blogAPI } from "app/api/modules/blogAPI";

export function PopUp(props) {
  return (
    <div className="fixed inset-10 z-50 overflow-y-auto flex justify-center items-center">
      <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between">
            <svg
              width={40}
              height={40}
              className="mt-4 w-12 h-12 m-auto text-red-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
            </svg>
            <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
              Remove card
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
              Are you sure you want to delete this card ?
            </p>
            <div className="flex items-center justify-between gap-4 w-full mt-8">
              <button
                type="button"
                className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={props.onDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-red-500 focus:ring-offset-red-200 text-red-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={props.onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DeleteBlogButton({ blogId }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleDelete = async () => {
    const res = await blogAPI.deleteBlog(blogId);
    if (res.status === 200) {
      window.location.reload();
    }
  };

  return (
    <div
      className="hover:bg-red-100 text-red-400 rounded-lg cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      {isOpen && <PopUp onClose={closeModal} onDelete={handleDelete} />}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 p-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  );
}

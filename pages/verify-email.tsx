import { authAPI } from "app/api/modules/authAPI";
import { removeEmail } from "app/redux/features/user";
import { useFormik } from "formik";
import Router from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function VerifyEmail() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: user.email,
      verificationCode: "",
    },
    onSubmit: async (values) => {
      const res = await authAPI.verify(values);
      if (res.status === 200) {
        dispatch(removeEmail());
        Router.push("/login");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" relative ">
        <label className="text-gray-700">Email</label>
        <input
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="string"
          placeholder="Code"
          name="verificationCode"
          id="verificationCode"
          value={formik.values.verificationCode}
          onChange={formik.handleChange}
        />
      </div>
      <button type="submit">Verify</button>
    </form>
  );
}

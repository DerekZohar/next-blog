import { authAPI } from "app/api/modules/authAPI";
import { login, logout } from "app/redux/features/user";
import jwt_decode from "jwt-decode";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

export default function AuthProvider(props) {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["jwt"]);

  useEffect(() => {
    const fetchInfo = async () => {
      var expRefreshToken = jwt_decode(cookies.jwt.refreshToken)["exp"];
      if (expRefreshToken <= new Date().getTime() / 1000) {
        dispatch(logout());
      } else {
        var exp = jwt_decode(cookies.jwt.accessToken)["exp"];
        if (exp <= new Date().getTime() / 1000) await authAPI.resetToken();
      }
    };

    if (cookies.jwt !== undefined) {
      fetchInfo();
      dispatch(login(cookies.jwt));
    }
  }, []);

  return <div className="flex-grow">{props.children}</div>;
}

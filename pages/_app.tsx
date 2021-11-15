import Navbar from "app/components/modules/Navbar";
import VerticalNav from "app/components/modules/VerticalNav";
import AuthProvider from "app/components/organisms/AuthProvider";
import { GoogleAuthProvider } from "app/components/organisms/GoogleProvider";
import { persistor, store } from "app/redux/store";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const listExclude = [
    "/login",
    "/register",
    "/forgot-password",
    "/verify-email",
  ];
  return (
    <GoogleAuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CookiesProvider>
            <AuthProvider>
              <ToastContainer />
              <Navbar />
              {1 ? (
                <div className="flex">
                  <VerticalNav />
                  <div className="pl-52 pr-16 flex-1 w-full">
                    <Component {...pageProps} />
                  </div>
                </div>
              ) : (
                <Component {...pageProps} />
              )}
              {/* <div className="h-[500px]"></div> */}
            </AuthProvider>
          </CookiesProvider>
        </PersistGate>
      </Provider>
    </GoogleAuthProvider>
  );
}
export default MyApp;

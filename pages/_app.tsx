import "../styles/globals.scss";
import type { AppProps } from "next/app";
import VerticalNav from "app/components/modules/VerticalNav";
import Navbar from "app/components/modules/Navbar";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import { useRouter } from "next/dist/client/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "app/redux/store";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const listExclude = [
    "/login",
    "/register",
    "/forgot-password",
    "/verify-email",
  ];
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        {1 ? (
          <div>
            <VerticalNav />
            <div className="pl-52 pr-16">
              <Component {...pageProps} />
            </div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
        {/* <div className="h-[500px]"></div> */}
      </PersistGate>
    </Provider>
  );
}
export default MyApp;

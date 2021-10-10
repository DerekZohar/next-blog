import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "app/components/organisms/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;

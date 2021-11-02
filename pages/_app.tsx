import "../styles/globals.scss";
import type { AppProps } from "next/app";
import VerticalNav from "app/components/modules/VerticalNav";
import Navbar from "app/components/modules/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <VerticalNav />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;

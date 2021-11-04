import "../styles/globals.scss";
import type { AppProps } from "next/app";
import VerticalNav from "app/components/modules/VerticalNav";
import Navbar from "app/components/modules/Navbar";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <VerticalNav />
      <div className="pl-52 pr-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;

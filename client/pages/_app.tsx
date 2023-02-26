import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
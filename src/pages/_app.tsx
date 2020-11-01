import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/globals.css";


export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <NextNprogress />
    </Provider>
  );
}

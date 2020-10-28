import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import "../styles/globals.css";

/* import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
); */

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress  />
    </>
  );
}

export default MyApp;

import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import "../styles/globals.css";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../store/reducer/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <NextNprogress />
    </Provider>
  );
}

export default MyApp;

import React from "react";
import Head from "next/head";
import { globalStyles } from "../styles/reset";
import "antd/dist/antd.css";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import reducer from "../reducers/index";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const Noop = ({ children }) => children;

const JustSell = ({ Component, pageProps, store }) => {
  const Layout = Component.Layout || Noop;
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <style type="text/css">{globalStyles}</style>
        <title>JustSell</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default withRedux((initialState, options) => {
  const store = createStore(reducer, initialState, composeWithDevTools());
  return store;
})(JustSell);

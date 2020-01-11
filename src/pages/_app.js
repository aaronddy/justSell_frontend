import React from "react";
import Head from "next/head";
import { globalStyles } from "../styles/reset";

const Noop = ({ children }) => children;

export default function JustSell({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <style type="text/css">{globalStyles}</style>
        <title>JustSell</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

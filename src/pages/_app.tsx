import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/a-logo-rounded.png"
          type="image/x-icon"
        />

        <title>{`Husnain's Portfolio`}</title>

        <meta name="title" content="Husnain's Portfolio" />
        <meta name="description" content="Husnain Farooq's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Husnain's Portfolio" />
        <meta property="og:description" content="Husnain Farooq's Portfolio" />
        <meta
          property="og:image"
          content="/a-logo-rounded.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Husnain's Portfolio" />
        <meta
          property="twitter:description"
          content="Husnain Farooq's Portfolio"
        />
        <meta
          property="twitter:image"
          content="/a-logo-rounded.png"
        />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MyApp;

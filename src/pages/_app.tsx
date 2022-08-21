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
          href="https://i.ibb.co/fnb8VMt/a-logo.png"
          type="image/x-icon"
        />

        <title>{`Asad's Portfolio`}</title>

        <meta name="title" content="Asad's Portfolio" />
        <meta name="description" content="Asad Shabir's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Asad's Portfolio" />
        <meta property="og:description" content="Asad Shabir's Portfolio" />
        <meta
          property="og:image"
          content="https://i.ibb.co/fnb8VMt/a-logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Asad's Portfolio" />
        <meta
          property="twitter:description"
          content="Asad Shabir's Portfolio"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/fnb8VMt/a-logo.png"
        />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MyApp;

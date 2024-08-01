import "@/styles/globals.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gbenga Oshagbemi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Website for Gbenga Oshagbemi"
          content="My Personal portfolio website"
        />
        <meta property="og:image" content="/default-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

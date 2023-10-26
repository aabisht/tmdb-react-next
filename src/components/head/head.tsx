import React from "react";
import Head from "next/head";
import { roboto } from "@components/fonts/roboto";
import "@material-design-icons/font/filled.css";
import "@material-design-icons/font/outlined.css";

const HTMLHead = ({ pageTitle }: { pageTitle?: string }) => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#032541" />
        <title>{pageTitle}</title>
      </Head>

      <style jsx global>{`
        :root {
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default HTMLHead;

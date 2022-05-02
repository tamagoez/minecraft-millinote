import "../styles/globals.css";
import { useRouter } from "next/router";
// import twemoji from "twemoji";
import NavBar from "/components/NavBar";
import Footer from "/components/Footer";
import { MDXProvider } from "@mdx-js/react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import {
  HeadTitle,
  ContentP,
  ContentH2,
  ContentCode,
  ContentLink,
  ContentB
} from "/components/Convert";
// https://zenn.dev/catnose99/articles/bb943c3dc99d89
import Head from "next/head";
import EditThisPage from "/components/EditThisPage";

export function reportWebVitals(metric) {
  console.log(metric);
}

export function HeadContents() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}

export default function Page({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const components = {
    h1: HeadTitle,
    p: ContentP,
    h2: ContentH2,
    code: ContentCode,
    a: ContentLink,
    b: ContentB,
  };

  const router = useRouter();
  const nowurl = router.pathname;
  console.log("[_app.js] Access link: " + nowurl);

  if (nowurl === "/" || nowurl === "/ja" || nowurl === "/en") {
    return (
      <>
        <HeadContents />
        <div>
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <HeadContents />
        <div className="sticky top-0">
          <NavBar />
        </div>
        <div className="px-3 py-1 min-h-[60vh]">
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
          <div className="pt-6">
            <EditThisPage from={nowurl} lang="ja" />
          </div>
        </div>
        <div className="py-4" />
        <Footer />
      </>
    );
  }
}

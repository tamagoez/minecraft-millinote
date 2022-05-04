import "../styles/globals.css";
import { useRouter } from "next/router";
// import twemoji from "twemoji";
import NavBar from "/components/NavBar";
import Footer from "/components/Footer";
import { MDXProvider } from "@mdx-js/react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Scroll from "react-scroll";
import LangSelect from "/components/LangSelect"
import { MdFeedback } from 'react-icons/md'

import {
  HeadTitle,
  ContentP,
  ContentH2,
  ContentCode,
  ContentA,
  ContentB,
  ContentH3,
  ContentUl,
  ContentImg,
  ContentHr
} from "/components/Convert";
// https://zenn.dev/catnose99/articles/bb943c3dc99d89
import Head from "next/head";
import EditThisPage from "/components/EditThisPage";
import NextNProgress from "nextjs-progressbar";
import Feedback from "/components/Feedback";

export function reportWebVitals(metric) {
  console.log(metric);
}

export function HeadContents() {
  return (
    <>
      <Head>
        <meta name="description" content="Minecraft wiki which ripe in knowledge and experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress
        startPosition={0.45}
        stopDelayMs={180}
        height={4}
        showOnShallow={true}
        options={{ showSpinner: false, }}
      />
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
    a: ContentA,
    b: ContentB,
    h3: ContentH3,
    ul: ContentUl,
    img: ContentImg,
    hr: ContentHr,
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
    const ScrollAS = Scroll.animateScroll;
    if (nowurl.indexOf('#') != -1) {
      ScrollAS.scrollMore(-65)
    }
    return (
      <>
        <HeadContents />
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        <div className="bottom-20 left-0 fixed z-50">
          <label htmlFor="feedback-modal" className="btn rounded-none rounded-r-lg modal-button opacity-80 hover:opacity-95"><MdFeedback /><p className="px-1"/>Feedback</label>
          <Feedback />
        </div>
        <div className="px-3 pt-1 min-h-[83vh]">
          <div className="py-1 z-0">
            <LangSelect />
          </div>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
          <div className="pt-6" />
          <EditThisPage from={nowurl} lang="ja" />
        </div>
        <div className="pt-4" />
        <Footer />
      </>
    );
  }
}

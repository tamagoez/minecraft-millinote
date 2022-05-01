import "../styles/globals.css";
import { useRouter } from "next/router";
// import twemoji from "twemoji";
import NavBar from "/components/NavBar";
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import { HeadTitle, ContentP, ContentH2, ContentCode } from '/components/Convert'

export function reportWebVitals(metric) {
  console.log(metric);
}

// const components = {}

export default function Page({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  
  const components = {
    h1: HeadTitle,
    p: ContentP,
    h2: ContentH2,
    code: ContentCode,
  }
  
  const router = useRouter();
  const nowurl = router.pathname;
  console.log("[_app.js] Access link: " + nowurl);
  
  if (nowurl === "/" || nowurl === "/ja" || nowurl === "/en") {
    return (
      <>
        <div>
          <Component {...pageProps} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="sticky top-0">
          <NavBar />
        </div>
        <div className="px-3 py-1">
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </div>
      </>
    );
  }
}

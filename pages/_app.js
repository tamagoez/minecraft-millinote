import "../styles/globals.css";
import { useRouter } from "next/router";
// import twemoji from "twemoji";
import NavBar from "/components/NavBar";
// import { MDXProvider } from '@mdx-js/react'

export function reportWebVitals(metric) {
  console.log(metric);
}

// const components = {}

export default function Page({ Component, pageProps }) {
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
        <div>
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}

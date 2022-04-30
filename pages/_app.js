import "../styles/globals.css";
// import { router } from "next/router";
// import twemoji from "twemoji";
import NavBar from '/components/NavBar';
// import { MDXProvider } from '@mdx-js/react'

export function reportWebVitals(metric) {
  console.log(metric)
}

// const components = {}

export default function Page({ Component, pageProps }) {
  return (
    <>
    <div className="sticky top-0 z-50">
      <NavBar />
    </div>
    <div>
      <Component {...pageProps} />
    </div>
</>
  )
}

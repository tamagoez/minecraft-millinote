import "../styles/globals.css";
// import { router } from "next/router";
// import twemoji from "twemoji";
import NavBar from '/components/NavBar';
import { MDXProvider } from '@mdx-js/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;

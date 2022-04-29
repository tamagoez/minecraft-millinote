import "../styles/globals.css";
// import { router } from "next/router";
// import twemoji from "twemoji";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

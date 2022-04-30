import "../styles/globals.css";
// import { router } from "next/router";
// import twemoji from "twemoji";
import NavBar from '/components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

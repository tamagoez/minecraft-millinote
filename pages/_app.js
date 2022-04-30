import "../styles/globals.css";
// import { router } from "next/router";
// import twemoji from "twemoji";
import NavBar from '/components/NavBar';
import { MDXProvider } from '@mdx-js/react'

export function reportWebVitals(metric) {
  console.log(metric)
}

// const components = {}

export default function Page(props) {
  return (
    <>
    <div className="sticky top-0">
      <NavBar />
    </div>
    <div>
    <MDXProvider>
      <main {...props} />
    </MDXProvider>
    </div>
</>
  )
}

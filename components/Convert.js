import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ParseURL from "/lib/ParseURL";

import { animateScroll as scroll } from "react-scroll";
function movenav() {
  setTimeout(function(){
    scroll.scrollMore(-65)
  },100);
}

export function HeadTitle({ children }) {
  const fixed_name = " - Minecraft WikiNote"
  return (
    <>
      <Head>
        <title>{children + fixed_name}</title>
        <meta property="og:title" content={children + fixed_name} key="title" />
      </Head>
      <div className="pb-1" />
      <h1 className="px-1 font-bold text-3xl text-base-900 border-solid border-b-4">
        {children}
      </h1>
      <div className="pb-1.5" />
    </>
  );
}

export function ContentH2({ children }) {
  return (
    <>
      <div className="pb-1" />
      <div className="border-dashed border-b-[3px] pt-5 flex">
        <h2 className="font-semibold text-base-900 text-2xl" id={children}>{children}</h2>
        <Link href={"#" + children}><p className="pl-2 cursor-pointer text-base-400 text-2xl font-normal hover:font-semibold hover:text-600" onClick={() => movenav()}>#</p></Link>
      </div>
      <div className="pb-2" />
    </>
  );
}

export function ContentH3({ children }) {
  return (
    <>
      <div className="pb-1" />
      <div className="border-dotted border-b-2 pt-2 flex">
        <h2 className="font-medium text-base-800 text-xl" id={children}>{children}</h2>
        <Link href={"#" + children}><p className="pl-2 cursor-pointer text-base-400 hover:text-base-600 text-xl font-normal hover:font-semibold" onClick={() => movenav()}>#</p></Link>
      </div>
      <div className="pb-1" />
    </>
  );
}

export function ContentCode({ children }) {
  return (
    <>
      <div className="pt-1" />
      <div className="rounded-md bg-base-content pb-3 pt-3 shadow-md shadow-slate-800/50 overflow-x-auto">
        <div className="pl-4 z-10 py-1">
        <code className="text-base-100">{children}</code>
        </div>
      </div>
      <div className="pb-2" />
    </>
  );
}

export function ContentP({ children }) {
  return (
    <>
      <p className="text-base-700">{children}</p>
    </>
  );
}

export function ContentB({ children }) {
  return (
    <>
      <p className="text-base-800 font-bold">{children}</p>
    </>
  )
}

export function ContentA({ href, children }) {
  const router = useRouter();
  const linkurl = ParseURL(href, router.pathname)
  // https://hataworakuni.net/check-included-words-in-javascript
  // 比較による文字列有無の判定
  if (linkurl.indexOf('.') != -1) {
    console.log("Include '.' " + linkurl)
    return (
    <>
      <Link href={linkurl} passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 text-base-600 hover:text-sky-600 cursor-pointer"
        >
              {children}
        </a>
      </Link>
    </>
    )
  } else {
    console.log("No '.': " + linkurl);
    return (
    <>
      <Link href={linkurl} passHref>
        <a
          className="underline decoration-1 text-base-600 hover:text-sky-600 cursor-pointer"
        >
              {children}
        </a>
      </Link>
    </>
  );
  }
}

export function ContentDel({ children }) {
  return (
    <>
      <p className="text-base-600 line-through">{children}</p>
    </>
  )
}

export function ContentUl({ children }) {
  return (
    <>
      <ul className="list-disc pl-7">{children}</ul>
    </>
  )
}

export function ContentImg({ src, alt, width, height }) {
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} />
    </>
  )
}

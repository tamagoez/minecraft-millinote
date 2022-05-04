import Link from "next/link";
import { FaPen } from "react-icons/fa";
import Cookies from 'js-cookie'

export default function EditThisPage({ from }) {
  const lang = Cookies.get('lang')
  const hreflink =
    "https://github.com/ripenote/docs-minecraft-ripenote/edit/main" +
    from +
    ".mdx";
  if (lang === "ja") {
    return (
      <>
        <Link href={hreflink} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <FaPen />
            <p className="px-1" />
            このページを編集する
          </a>
        </Link>
      </>
    );
  } else {
    return (
      <Link href={hreflink} passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm hover:motion-safe:animate-pulse"
        >
          <FaPen />
          <div className="px-1" />
          Edit this page
        </a>
      </Link>
    );
  }
}

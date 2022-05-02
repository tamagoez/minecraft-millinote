import Link from "next/link";
import { FaPen } from "react-icons/fa";
export default function EditThisPage({ from, lang }) {
  const hreflink =
    "https://github.com/tamagoez/minecraft-wikinote/edit/main/documents" +
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

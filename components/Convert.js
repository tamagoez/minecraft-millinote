import Link from "next/link";

export function HeadTitle({ children }) {
  return (
    <>
      <h1 className="px-1 font-bold text-2xl text-base-900 border-solid border-b-2 pb-1">
        {children}
      </h1>
      <div className="pb-2"></div>
    </>
  );
}

export function ContentH2({ children }) {
  return (
    <>
      <div className="border-dashed border-b-4 bg-base-500 pt-5 pb-1">
        <h2 className="font-semibold text-lg text-base-800">{children}</h2>
      </div>
      <div className="pb-2" />
    </>
  );
}

export function ContentCode({ children }) {
  return (
    <>
      <div className="pt-1" />
      <div className="rounded-md bg-base-content pb-3 pt-3 shadow-md shadow-base-content/50 overflow-x-auto">
        <code className="px-3 z-10 text-base-200 py-3">{children}</code>
      </div>
    </>
  );
}

export function ContentP({ children }) {
  return (
    <>
      <p className="text-base-800">{children}</p>
    </>
  );
}

export function ContentB({ children }) {
  return (
    <>
      <p className="text-base-900 font-bold">{children}</p>
    </>
  )
}

export function ContentLink({ href, children }) {
  return (
    <>
      <Link href={href} passHref>
        <p className="underline decoration-1 hover:decoration-2">{children}</p>
      </Link>
    </>
  );
}

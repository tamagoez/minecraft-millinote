import Link from "next/link";

export function HeadTitle({ children }) {
  return (
    <>
      <div className="pb-1" />
      <h1 className="px-1 font-bold text-2xl text-base-900 border-solid border-b-2">
        {children}
      </h1>
      <div className="pb-2" />
    </>
  );
}

export function ContentH2({ children }) {
  return (
    <>
      <div className="pb-1" />
      <div className="border-dotted border-b-2 bg-base-500 pt-2">
        <h2 className="font-semibold text-lg text-base-900">{children}</h2>
      </div>
      <div className="pb-2" />
    </>
  );
}

export function ContentH3({ children }) {
  return (
    <>
      <div className="pb-1" />
      <div className="border-dashed border-b-4 bg-base-500 pt-5">
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
      <div className="rounded-md bg-base-content pb-3 pt-3 shadow-md shadow-slate-800/50 overflow-x-auto">
        <code className="px-3 z-10 text-base-200 py-3">{children}</code>
      </div>
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
  return (
    <>
      <Link href={href} passHref>
        <p className="underline decoration-1 hover:decoration-2">{children}</p>
      </Link>
    </>
  );
}

export function ContentUl({ children }) {
  return (
    <>
      <ul className="list-disc">{children}</ul>
    </>
  )
}

import Link from 'next/link'

export function HeadTitle({ children }) {
  return (
    <>
      <h1 className="font-bold text-2xl text-base-900">{children}</h1>
      <div className="divider" />
    </>
  )
}

export function ContentH2({ children }) {
  return (
    <>
      <div className="border-dashed border-b-4 bg-base-500 pt-6 pb-3">
        <h2 className="font-semibold text-lg text-base-800">{children}</h2>
      </div>
    </>
  )
}

export function ContentCode({ children }) {
  return (
    <>
      <div className="rounded-lg bg-base-content pt-2 pb-4 shadow-md shadow-base-content/50">
        <code className="px-2 z-10 text-base-200 py-3">{children}</code>
      </div>
    </>
  )
}

export function ContentP({ children }) {
  return (
    <>
      <p className="text-base-800">{children}</p>
    </>
   )
}

export function ContentLink({ href, children }) {
  return (
    <>
      <Link href={href} passHref><p className="underline decoration-1 hover:decoration-2">{children}</p></Link>
    </>
  )
}

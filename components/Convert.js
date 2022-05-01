export function HeadTitle({ children }) {
  return (
    <>
      <h1 className="font-bold text-xl text-base-900">{children}</h1>
      <div className="divider" />
    </>
  )
}

export function ContentH2({ children }) {
  return (
    <>
      <div className="border-dashed border-y-4 bg-base-500">
        <h2 className="font-semibold text-lg text-base-800">{children}</h2>
      </div>
    </>
  )
}

export function ContentCode({ children }) {
  return (
    <>
      <div className="rounded-lg bg-base-content">
        <code className"p-2">{children}</code>
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

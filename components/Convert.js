export function HeadTitle({ children }) {
  return (
    <>
      <h1 className="font-medium text-xl text-base-900">{children}</h1>
      <div className="divider" />
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

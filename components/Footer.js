import Cookies from 'js-cookie'

export default function Footer(lang) {
  function lastcontribute() {
    const lastsha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
    const arrangesha = lastsha.substring(0,7)
    const message = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE
    const author = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME
    return (
      <>
        <p className='break-normal'>Last update: {message} by <p className="text-bold">{author}</p> ({arrangesha})</p>
      </>
    )
  }
  const lastlog = "Maintain by tamagoez";
  if (Cookies.get('lang') === "ja") {
    return (
      <>
        <footer className="footer footer-center p-4 bg-base-200 text-base-content rounded-t-lg">
          <div>
            <p>Copyright © 2022 - RipeNote</p>
            <p>当サイトは&quot;Mojang AB&quot;および&quot;Microsoft社&quot;とは無関係であり、記事を利用したことによる如何なる損害も管理人は責任を負いません。</p>
            {lastcontribute()}
          </div>
        </footer>
      </>
    )
  } else {
    return (
      <>
        <footer className="footer footer-center p-4 bg-base-200 text-base-content rounded-t-lg">
          <div>
            <p>Copyright © 2022 - RipeNote</p>
            <p>&quot;Minecraft&quot; is a trademark of Mojang Studios. This website is not affiliated with Mojang Studios.</p>
            {lastcontribute()}
          </div>
        </footer>
      </>
    )
  }
}

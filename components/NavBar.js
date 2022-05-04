import Link from "next/link";
export default function NavBar() {
  const lico = "🌞";
  const dico = "🌙";
  
  function navbarend() {
    return (
      <>
      <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <select data-choose-theme className="select select-bordered">
                  <option value="light">{lico} Light</option>
                  <option value="dark">{dico} Dark</option>
                  <option value="lofi">{lico} Lofi</option>
                  <option value="night">{dico} Night</option>
                  <option disabled>- {lico} -</option>
                  <option value="emerald">{lico} Emerald</option>
                  <option value="winter">{lico} Winter</option>
                  <option value="cmyk">{lico} CMYK</option>
                  <option value="garden">{lico} Garden</option>
                  <option value="pastel">{lico} Pastel</option>
                  <option value="corporate">{lico} Corporate</option>
                  <option value="aqua">{lico} Aqua</option>
                  <option disabled>- {dico} </option>
                  <option value="dracula">{dico} Dracula</option>
                  <option value="wireframe">{dico} Wireframe</option>
                </select>
              </li>
            </ul>
          </div>
        </>
    )
  }
  
  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="navbar bg-base-200/95">
        <div className="navbar-start flex">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div className="block sm:hidden">
            <Link href="/" passHref>
              <span className="btn btn-ghost text-left normal-case text-base tracking-tight text-bold">
                Minecraft RipeNote
              </span>
            </Link>
            <div className="justify-end">
              {navbarend()}
            </div>
          </div>
        </div>
        <div className="navbar-center hidden sm:block">
          <div className="hidden sm:block">
            <Link href="/" passHref>
              <span className="btn btn-ghost normal-case text-lg text-bold">
                Minecraft WikiNote
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden sm:block">
            {navbarend()}
          </div>
        </div>
      </div>
    </div>
  );
}

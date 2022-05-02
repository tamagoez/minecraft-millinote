import { router } from "next/router";
import Cookies from 'js-cookie'

export default function Language() {

  function clicklang(language){
    Cookies.set('lang', langugae)
    router.push("/" + language)
  }
  return (
    <>
      <input type="checkbox" id="language" className="modal-toggle" />
      <label htmlFor="language" className="modal cursor-pointer">
        <label className="modal-box relative w-full" htmlFor="">
          <ul className="menu bg-base-100 w-56 p-2 rounded-box w-full">
            <li>
              <span onClick={() => clicklang("en")}>🇺🇸 English</span>
            </li>
            <li>
              <span onClick={() => clicklang("ja")}>🇯🇵 日本語</span>
            </li>
          </ul>
        </label>
      </label>
    </>
  );
}

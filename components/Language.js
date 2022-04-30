import { router } from "next/router";
export default function Language() {
  return (
    <>
      <input type="checkbox" id="language" className="modal-toggle" />
      <label htmlFor="language" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <ul className="menu bg-base-100 w-56 p-2 rounded-box w-full">
            <li>
              <span onClick={() => router.push("/en")}>🇺🇸 English</span>
            </li>
            <li>
              <span onClick={() => router.push("/ja")}>🇯🇵 日本語</span>
            </li>
          </ul>
        </label>
      </label>
    </>
  );
}

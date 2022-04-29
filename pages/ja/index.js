import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { useRef } from "react";
import { router } from "next/router";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Home() {
  const contentRef = useRef(null);
  return (
    <div>
      <Head>
        <title>Minecraft WikiNote</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <div className="hero min-h-screen bg-gradient-to-r from-orange-900/20 to-green-100">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Minecraft WikiNote</h1>
              <p className="py-3">
                わかりやすさ重視のMinecraftウィキ
                <br />
                初心者と一緒に書いています
              </p>
              <label htmlFor="language" className="btn modal-button">
                Select language
              </label>
              <div className="py-8 w-full">
                <button
                  className="btn btn-block btn-outline"
                  onClick={() =>
                    contentRef.current.scrollIntoView({
                      block: "start",
                      behavior: "smooth"
                    })
                  }
                >
                  探検する
                </button>
                <p
                  onClick={() =>
                    contentRef.current.scrollIntoView({
                      block: "start",
                      behavior: "smooth"
                    })
                  }
                  className="text-5xl text-gray-900 hover:text-gray-600 pt-6 flex justify-center"
                >
                  <BsChevronDoubleDown />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={contentRef} style={{ height: 0 }} />
        <div className="divider py-4">内容</div>
        <div className="flex flex-wrap justify-center gap-4">
          <div>
            <Link href="/ja/Adventure" passHref>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">探検</h2>
                  <p>
                    Minecraftの世界を探索しよう
                    <br />
                    ポイントやハウツーも
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">見てみる</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/ja/Create" passHref>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">作る</h2>
                  <p>
                    建築/エンチャント/レッドストーン回路など
                    <br />
                    著者が苦手という都合上ページ数が少ないです
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">見てみる</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/ja/Commands" passHref>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">コマンド</h2>
                  <p>
                    なにかかっこいい物をコマンドで作ろう
                    <br />
                    分かりやすいコマンド解説もここから
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">見てみる</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/ja/Server" passHref>
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">サーバー</h2>
                  <p>
                    サーバー管理者が捧げる管理方法はここから!
                    <br />
                    プラグインなども解説しています
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">見てみる</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </>

      <div className="pt-8" />
      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </span>
      </footer>

      <input type="checkbox" id="language" className="modal-toggle" />
      <label htmlFor="language" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <ul className="menu bg-base-100 w-56 p-2 rounded-box w-full">
            <li>
              <span onClick={() => router.push("/")}>🇺🇸 English</span>
            </li>
            <li>
              <span onClick={() => router.push("/ja")}>🇯🇵 日本語</span>
            </li>
          </ul>
        </label>
      </label>
    </div>
  );
}

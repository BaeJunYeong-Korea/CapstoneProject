// ID, PASSWORD 입력 시 계정 생성.
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import Head from "next/head";

const logIn = () => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = async (e) => {
    e.preventDefault();

    const data = {
      username: name,
      password: password,
    };
    fetch("http://localhost:8080/v2/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Username: "KASKBJ3W4Q3NIXOG3XGBC6RY",
        Password: "Yjl9CfuSpBR5TBW5SGBAOqv5t8ig7efbGeaGtfmO",
      },
      body: JSON.stringify(data),
    }).then((response) => console.log(response.data));
  };

  const logIn = async (e) => {
    e.preventDefault();

    window.localStorage.setItem("userName", name);
    window.localStorage.setItem("password", password);
    window.localStorage.setItem("klay", 1);
    // (window.localStorage.getItem("userName")

    console.log(
      window.localStorage.getItem("userName"),
      window.localStorage.getItem("password")
    );
    await router.push("/");
  };

  //보이는 로그인 창
  return (
    <div
      id="bodyy"
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Non Fungible Heroes</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <meta property="og:title" content="Non Fungible Heroes" key="ogtitle" />
        <meta
          property="og:description"
          content="Introducing Non Fungible Heroes"
          key="ogdesc"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://nftheroes.com/" key="ogurl" />
        <meta
          property="og:image"
          content="https://nftheroes.com/images/hero.gif"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="https://nftheroes.com/"
          key="ogsitename"
        />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:domain" content="nfheroes.co" key="twdomain" />
        <meta
          property="twitter:url"
          content="https://nftheroes.com/"
          key="twurl"
        />
        <meta name="twitter:title" content="NFHeroes Co." key="twtitle" />
        <meta
          name="twitter:description"
          content="Introducing Non Fungible Heroes"
          key="twdesc"
        />
        <meta
          name="twitter:image"
          content="https://nftheroes.com/images/hero.gif"
          key="twimage"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div>
        <div className="flex items-center justify-between w-full border-b-2   pb-6">
          <a href="/" className="">
            <img
              src="images/hero.gif"
              width="108"
              alt=""
              className="logo-image"
            />
          </a>
          <nav className="flex flex-wrap flex-row justify-around ReallyFree">
            <a
              href="/#about"
              className="text-blue-400 text-4xl hover:text-black m-6"
            >
              INTRODUCE
            </a>

            <a
              href="/#traits"
              className="text-4xl text-blue-400 hover:text-black m-6"
            >
              NFT Hero
            </a>
            <a
              href="/nftlist"
              className="text-4xl text-blue-400 hover:text-black m-6"
            >
              List
            </a>
            <a
              href="/#roadmap"
              className="text-4xl text-blue-400 hover:text-black m-6 ReallyFree"
            >
              Roadmap
            </a>
            <a
              href="/#contact"
              className="text-4xl text-blue-400 hover:text-black m-6"
            >
              TEAM
            </a>
            <a
              href="https://twitter.com/NFHER0ES"
              className="text-4xl  hover:text-black m-6 text-blue-400"
            >
              TWITTER
            </a>
            {
              <a
                href="/MyPage"
                className="text-4xl text-blue-400 hover:text-black m-6"
              >
                MyPage
              </a>
            }
            <a
              href="/login"
              className="text-4xl  hover:text-blue-400 m-6 text-white"
            >
              LOGIN
            </a>
          </nav>
        </div>
      </div>

      <h3 className="mt-4 ReallyFree  text-4xl m-6 text-white">
        {" "}
        Please login{" "}
      </h3>

      <div className="form-group">
        <label className="mt-4 ReallyFree  text-2xl  hover:text-blue-400 m-6 text-white">
          name
        </label>
        <input
          type="name"
          className="form-control"
          placeholder="name"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className=" mt-4 ReallyFree text-2xl  hover:text-blue-400 m-6 text-white">
          password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="mt-4 ReallyFree text-4xl border-6 bg-blue-400  text-white hover:text-black p-2"
        type="button"
        onClick={signIn}
      >
        sign In
      </button>

      <button
        className="mt-4 ReallyFree text-4xl border-6 bg-blue-400  text-white hover:text-black p-2"
        type="button"
        onClick={logIn}
      >
        Log In
      </button>
    </div>
  );
};
export default logIn;

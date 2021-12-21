import Head from "next/head";
import React from "react";
import axios from "axios";

function ImageUploadExample() {
  const information = {};
  if (typeof window !== "undefined") {
    let params = new URL(document.location).searchParams;
    information["owner"] = params.get("owner");
    information["tokenId"] = params.get("tokenId");
    information["Hash"] = params.get("Hash");
    information["image"] = params.get("image");
  }
  console.log(information);

  const onClick = () => {
    axios
      .post("http://localhost:8080/transaction", {
        user: information.owner,
        to: window.localStorage.getItem("userName"),
        amount: window.localStorage.getItem("klay"),
        token: information.tokenId,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

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

      <div className="mt-10 text-blue-500 ReallyFree text-2xl">
        <img src={JSON.stringify(information.image, null, 2)} />
        Owner :{" "}
        {information && <div>{JSON.stringify(information.Owner, null, 2)}</div>}
        Hash :{" "}
        {information && <div>{JSON.stringify(information.Hash, null, 2)}</div>}
        Image :{" "}
        {information && <div>{JSON.stringify(information.image, null, 2)}</div>}
      </div>

      <div className="flex auth my-8 font-bold  justify-center items-center vw2">
        <button
          className="d-flex justify-content-center mt-4 ReallyFree text-5xl border-6 bg-blue-400 text-center text-white hover:text-black p-2"
          onClick={onClick}
        >
          Buy NFT
        </button>
      </div>
    </div>
  );
}

export default ImageUploadExample;

//NFT 보여주기+판매창
//보여주기만 구현
//ㅇㅣㅁㅣㅈㅣ ㅂㅏㄲㅜㅓㅇㅑㄷㅗㅣㅁ

import Head from "next/head";
import React from "react";

export default function Home() {
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
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
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
            {
              <a
                href="/mint"
                className="text-4xl text-blue-400 hover:text-black m-6"
              >
                MINT
              </a>
            }
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
            <a
              href="/login"
              className="text-4xl  hover:text-blue-400 m-6 text-white"
            >
              LOGIN
            </a>
          </nav>
        </div>
      </div>

      <div className="md:w-2/3 w-4/5"></div>
      <div className="flex flex-col items-center">
        <span className="text-7xl ReallyFree text-blue-400">NFT HERO</span>

        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <nav className="flex flex-wrap flex-row justify-around ReallyFree">
            <a
              href="#1"
              className="text-white text-6xl hover:text-black border-6 bg-blue-400 m-6"
            >
              HEAD
            </a>
            <a
              href="#2"
              className="text-white text-6xl hover:text-black border-6 bg-blue-400 m-6"
            >
              BODY
            </a>
            <a
              href="#3"
              className="text-white text-6xl hover:text-black border-6 bg-blue-400 m-6"
            >
              FACE
            </a>
            <a
              href="#4"
              className="text-white text-6xl hover:text-black border-6 bg-blue-400 m-6"
            >
              LEG
            </a>
            <a
              href="#5"
              className="text-white text-6xl hover:text-black border-6 bg-blue-400 m-6"
            >
              WEAPON
            </a>
            <a
              href="#6"
              className="text-white text-6xl hover:text-black border-6 bg-blue-500 m-6"
            >
              MIX!!
            </a>
          </nav>
        </div>
      </div>

      <div id="1" className="flex justify-around  mt-8 mx-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around ReallyFree">
              <img
                src="images/Head (2).png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix1
              <img
                src="images/Head.png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix2
              <img
                src="images/Head (1).png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix3
            </nav>
          </div>
        </div>
      </div>

      <div id="2" className="flex justify-around  mt-8 mx-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around ReallyFree">
              <img
                src="images/Body (2).png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix1
              <img
                src="images/body (3).png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix2
              <img
                src="images/Body (1).png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix3
            </nav>
          </div>
        </div>
      </div>

      <div id="3" className="flex justify-around  mt-8 mx-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around ReallyFree">
              <img
                src="images/Face 04.png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix1
              <img
                src="images/Face -02.png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix2
              <img
                src="images/Face 01.png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix3
            </nav>
          </div>
        </div>
      </div>

      <div id="4" className="flex justify-around  mt-8 mx-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around ReallyFree">
              <img
                src="images/Right hand (1).png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix1
              <img
                src="images/Right hand 02.png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix2
              <img
                src="images/Right hand.png"
                className="text-white text-6xl hover:border-black border-6 bg-white m-6"
              />
              mix3
            </nav>
          </div>
        </div>
      </div>

      <div id="5" className="flex justify-around  mt-8 mx-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <img
              src="images/Weapon.png"
              className="text-white text-6xl hover:border-black border-6 bg-white m-6"
            />
            mix1
            <img
              src="images/Weapon (2).png"
              className="text-white text-6xl hover:border-black border-6 bg-white m-6"
            />
            mix2
            <img
              src="images/Weapon (3).png"
              className=" text-white text-6xl hover:border-black border-6 bg-white m-6"
            />
            mix3
          </div>
        </div>
      </div>

      <div id="6" className="flex justify-around  mt-8 mx-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around ReallyFree">
              <a href="/product">
                <img
                  src="images/Shooting in The Air_002.png"
                  className="text-white text-6xl hover:border-black border-6 bg-white m-6"
                />
              </a>
              mix1
              <a href="/product2">
                <img
                  src="images/Attacking in the Air_011.png"
                  className="text-white text-6xl hover:border-black border-6 bg-white m-6"
                />
              </a>
              mix2
              <a href="/product3">
                <img
                  src="images/Attacking in The Air_005.png"
                  className="text-white text-6xl hover:border-black border-6 bg-white m-6"
                />
              </a>
              mix3
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

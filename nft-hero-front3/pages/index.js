//홈화면
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
        <meta charset="utf-8" />
        <meta property="og:title" content="NFT Heroes" key="ogtitle" />
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
              href="#about"
              className="text-blue-400 text-4xl hover:text-black m-6"
            >
              INTRODUCE
            </a>
            <a
              href="#traits"
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
              href="#roadmap"
              className="text-4xl text-blue-400 hover:text-black m-6 ReallyFree"
            >
              Roadmap
            </a>
            <a
              href="#contact"
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
              href="/logIn"
              className="text-4xl  hover:text-blue-400 m-6 text-white"
            >
              logIn
            </a>
          </nav>
        </div>
      </div>

      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
            <div className="lg:w-1/2 w-3/4">
              <h1 className="text-7xl ReallyFree text-blue-400">
                Introducing <br />
                <span className="text-blue-600 ReallyFree text-20xl">
                  Non Fungible Heroes
                </span>
              </h1>
              <p className="text-2xl text-gray-600 my-6  montserrat">
                Enter the world of{" "}
                <span className="text-gray-600 ReallyFree text-5xl">
                  NFHeroes
                </span>
                , Collect and trade characters, building your perfect team.
                <br></br>{" "}
                <span className="text-span-2 text-gray-600 font-bold">
                  Owned by you the players, for the players!
                </span>
                .<br />‍<br />
                Each{" "}
                <span className="text-gray-600 ReallyFree text-5xl">
                  NFHeroes
                </span>{" "}
                character is unique, equiped with a weapon, a skill, and a
                helpful pet. <br />
                <br />
                Get ready for BATTLE! and start collecting your perfect team
                now.
              </p>
              <p className="text-2xl text-black my-6  montserrat">
                {/* <strong>LAUNCH DATE:</strong> 26 August 2021. 2pm GMT/UCT. <br />‍ */}
                <span className="text-black text-2xl montserrat">
                  <strong>TOTAL SUPPLY: 9999</strong> NFHeroes.
                  <br />
                  <strong>PRICE: 5 KLAY </strong>each.
                </span>
              </p>
              {/* <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-08-29T12:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>  */}
            </div>
            <img
              className="lg:w-1/2 w-3/4"
              src="images/herocycle.gif"
              width="300px"
            />
          </div>
          <div className="flex flex-col items-center">
            <a
              href="/MyPage"
              className="mt-4 ReallyFree text-4xl border-6 bg-blue-400  text-white hover:text-black p-2 "
            >
              COLLECT NOW!
            </a>
          </div>
        </div>

        <div
          id="traits"
          className="flex flex-wrap justify-around items-center  mx-6 py-6"
        >
          <div className="border-4 border-blue-300 p-4">
            <img
              src="images/Traits4.gif"
              alt=""
              width="400px"
              className="feature-image"
            />
          </div>
          <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 text-xl text-black text-left my-6  montserrat ">
            <a
              href="/nft"
              className="mt-4 ReallyFree text-4xl border-6 bg-blue-400  text-white hover:text-black p-2 text-center"
            >
              NFT HERO GET!!
            </a>

            <p className="text-black my-6  montserrat">
              {" "}
              <span className="ReallyFree text-5xl text-gray-600">
                Region
              </span>{" "}
              5 Unique regions including Plains, Swamp, Underwoods, Snowy
              Mountains, and the Ashlands.
            </p>
            <p className="text-black my-6  montserrat">
              {" "}
              <span className="ReallyFree text-5xl text-purple-600">
                Rarity
              </span>{" "}
              5 raritys Bronze, Silver, Gold, Exotic, and Mythic. Card rarity
              will impact the strength and progression for that unique unit.
            </p>
            <p className="text-black my-6  montserrat">
              {" "}
              <span className="ReallyFree text-5xl text-green-600">Job</span> 15
              jobs to suite everyones taste
              <li>
                <b>Gathering Jobs</b> - Herbalist, Miner, Prospector,
                Woodcutter.
              </li>
              <li>
                <b>Crafting Jobs</b> - Brewer, Carpenter, Gemcutter, Goldsmith,
                Tailor.
              </li>
              <li>
                <b>Support Jobs</b> - Alchemist, Cook, Doctor.
              </li>
              <li>
                <b>Specialist Jobs</b> - Calligrapher, Merchant, Professor.
              </li>
            </p>
            <p className="text-black my-6  montserrat">
              {" "}
              <span className="ReallyFree text-5xl text-red-600">
                Weapon
              </span>{" "}
              10 Leathal and Non-Lethal Weapons.
              <li>
                <b>Ranged</b> - Bow, Kunai, Throwstar, Spear.
              </li>
              <li>
                <b>Magic</b> - Staff, Stave.
              </li>
              <li>
                <b>Melee</b> - Club, Falchion, Katana, Sword .
              </li>
            </p>
            <p className="text-black my-6  montserrat">
              {" "}
              <span className="ReallyFree text-5xl text-blue-600">Pet</span> 7
              Pets to help you on your journey, in PvE and PVP. Belth the demon,
              Grog the orkling, King the human, Mino the hybrid, Monke the ape,
              Oscar the furkin, and Tim the undead.
            </p>
          </div>
        </div>
        <h2 className="text-blue-400 ReallyFree text-7xl text-center mb-4">
          Showcase Cards
        </h2>
        <div>
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 ">
            <div className="bg-gray-900 shadow-lg rounded p-2 ">
              <div className="group relative">
                <img
                  className="w-full block rounded"
                  src="images/great1.png"
                  alt=""
                />
              </div>
              <div className="p-1">
                <p className="text-2xl text-black my-6  montserrat md:text-center">
                  <span className="font-bold text-gray-600 text-1xl ">
                    Region
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">
                    Underwoods
                  </span>
                  <br></br>
                  <span className="font-bold text-purple-600 text-1xl ">
                    Rarity
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Mythic</span>
                  <br></br>
                  <span className="font-bold text-green-600 text-1xl">
                    Job
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">
                    GemSmith
                  </span>
                  <br></br>
                  <span className="font-bold text-red-600 text-1xl">
                    Weapon
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Katana</span>
                  <br></br>
                  <span className="font-bold text-blue-600 text-1xl">
                    Pet
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Monke</span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="bg-gray-900 shadow-lg rounded p-2">
              <div className="group relative">
                <img
                  className="w-full block rounded"
                  src="images/great2.png"
                  alt=""
                />
              </div>
              <div className="p-1 ">
                <p className="text-2xl text-black my-6  montserrat md:text-center">
                  <span className="font-bold text-gray-600 text-1xl ">
                    Region
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">
                    Underwoods
                  </span>
                  <br></br>
                  <span className="font-bold text-purple-600 text-1xl ">
                    Rarity
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Mythic</span>
                  <br></br>
                  <span className="font-bold text-green-600 text-1xl">
                    Job
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Brewer</span>
                  <br></br>
                  <span className="font-bold text-red-600 text-1xl">
                    Weapon
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Spear</span>
                  <br></br>
                  <span className="font-bold text-blue-600 text-1xl">
                    Pet
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Belth</span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="bg-gray-900 shadow-lg rounded p-2">
              <div className="group relative">
                <img
                  className="w-full block rounded"
                  src="images/great3.png"
                  alt=""
                />
              </div>
              <div className="p-1 ">
                <p className="text-2xl text-black my-6  montserrat md:text-center">
                  <span className="font-bold text-gray-600 text-1xl ">
                    Region
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">
                    Underwoods
                  </span>
                  <br></br>
                  <span className="font-bold text-purple-600 text-1xl ">
                    Rarity
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">Mythic</span>
                  <br></br>
                  <span className="font-bold text-green-600 text-1xl">
                    Job
                  </span>{" "}
                  :{" "}
                  <span className="ReallyFree text-white text-4xl">
                    Merchant
                  </span>
                  <br></br>
                  <span className="font-bold text-red-600 text-1xl">
                    Weapon
                  </span>{" "}
                  : <span className="ReallyFree text-white text-4xl">Club</span>
                  <br></br>
                  <span className="font-bold text-blue-600 text-1xl">
                    Pet
                  </span>{" "}
                  : <span className="ReallyFree text-white text-4xl">King</span>
                  <br></br>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h2 className="text-7xl text-center ReallyFree text-blue-400 my-4">
            WHY NFT HEROES?
          </h2>
          <p className="text-xl text-black text-center my-6  montserrat">
            {" "}
            There are too many NFT that do not have a roadmap, they are simply
            cash grabs! We will not only{" "}
            <span className="text-blue-600 ReallyFree text-5xl">
              {" "}
              donate to charity{" "}
            </span>{" "}
            in line with our roadmap, but also plan to{" "}
            <span className="text-blue-600 ReallyFree text-5xl">
              {" "}
              build a game{" "}
            </span>{" "}
            that make use of the cards and add{" "}
            <span className="text-blue-600 ReallyFree text-5xl">
              {" "}
              long term value{" "}
            </span>{" "}
            to the project, to facilitate this we shall be reserving 20KLAY in
            the community wallet for prize money to use in the future.
          </p>
          <h2 className="text-6xl text-center ReallyFree text-blue-400 my-4 mb-40 ">
            ROADMAP
          </h2>
          <div id="roadmap" className="roadmapparent">
            <img src="/images/Roadmap.png" className="" />
            <img src="/images/templarwalk.gif" className="hero1walk" />
            <img src="/images/knightattack.gif" className="hero2walk" />
            <img src="/images/romanidle.gif" className="hero3walk" />
            <img src="/images/mystic.gif" className="hero4walk" />
            <img src="/images/devilmaskidle.gif" className="hero5walk" />
            <img src="/images/launch.png" className="info1 bounce box" />
            <img src="/images/2500.png" className="info2 bounce box" />
            <img src="/images/5000.png" className="info3 bounce box" />
            <img src="/images/7500.png" className="info4 bounce box" />
            <img src="/images/10000.png" className="info5 bounce box" />
          </div>
          <ul className="">
            <li className="text-xl text-black my-6  montserrat space-y-4">
              <span className="font-bold">
                {" "}
                판매 후 계획 The NFT roadmap is outlined below, after each
                milestone is reached a verifiable transaction will be made
                available.
              </span>

              <li>
                <span className="text-blue-600 ReallyFree text-4xl">
                  20% Sold
                </span>{" "}
                <b>A 5 card giveaway will be drawn for one lucky NTF holder.</b>
              </li>

              <li>
                <span className="text-blue-600 ReallyFree text-4xl">
                  25% Sold
                </span>{" "}
                The 1<sup>st</sup> donation milestone to{" "}
                <a
                  target="_blank"
                  href="https://www.savethechildren.org/"
                  className="underline text-black font-bold"
                >
                  Save the Children
                </a>
                , Their pioneering programs address children's needs, giving
                them a healthy start in life, the opportunity to learn, and
                protection from harm.
              </li>

              <li>
                <span className="text-blue-600 ReallyFree text-4xl">
                  50% Sold
                </span>
                <b> A $5000 KLAY raffle will be drawn between 5 NTF holder.</b>{" "}
              </li>
              <li>
                <span className="text-blue-600 ReallyFree text-4xl">
                  50% Sold
                </span>{" "}
                The 2<sup>nd</sup> donation milestone to{" "}
                <a
                  target="_blank"
                  href="https://thewaterproject.org/"
                  className="underline text-black font-bold"
                >
                  The Water Project
                </a>
                ,Helps to provide reliable water projects to communities in
                sub-Saharan Africa who suffer from a lack of access to clean
                water and proper sanitation.{" "}
              </li>

              <li>
                <span className="text-blue-600 ReallyFree text-4xl">
                  75% Sold
                </span>
                The 3<sup>rd</sup> donation milestone to{" "}
                <a
                  target="_blank"
                  href="https://foundation.mozilla.org/en/"
                  className="underline text-black font-bold"
                >
                  Mozilla Foundation
                </a>
                , a global community and public interest initiative who fight
                for the web to be open and accessible to all. Who protect the as
                a public resource and empower its users, and create open source
                products.
              </li>

              <li>
                <span className="text-blue-600 ReallyFree text-4xl">
                  100% Sold
                </span>{" "}
                <b>
                  Work will begin on a selection of mini-games to make the most
                  of your NFHeroes Team.
                </b>
              </li>

              <li>
                <span className="text-blue-600 ReallyFree text-4xl">
                  100% Sold
                </span>
                When we reach milestone 4 the final 4<sup>th</sup> donation will
                go to{" "}
                <a
                  target="_blank"
                  href="https://www.oxfam.org.uk/"
                  className="underline text-black font-bold"
                >
                  Oxfam
                </a>{" "}
                Who work to end the injustice of poverty. Who help people build
                better futures for themselves, hold the powerful accountable,
                and save lives in disasters.
              </li>
            </li>
          </ul>
        </div>
        <div
          id="contact"
          className="flex flex-wrap justify-around items-center  mx-6 py-6"
        >
          <div className=" p-4">
            <img
              src="images/letstalk.png"
              alt=""
              width="400px"
              className="feature-image"
            />
          </div>
          <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
            <h2 className="text-blue-400 ReallyFree text-6xl text-center">
              GET IN CONTACT
            </h2>
            <p className="text-xl text-black my-6  montserrat"> Questions?</p>
            <p className="text-xl text-black my-6  NanumGothic">
              <i className="fas fa-envelope-square"></i> Emails us at{" "}
              <a
                className="text-black underline font-bold"
                target="_blank"
                href="mailto:ha105903@naver.com"
              >
                ha105903@naver.com
              </a>
              <br />
              <i className="text-xl text-black my-6  NanumGothic"></i>
              <i class="fas fa-envelope-square"></i> Emails us at{" "}
              <a
                className="text-black underline font-bold"
                target="_blank"
                href="mailto:y_jin99@naver.com"
              >
                y_jin99@naver.com
              </a>
              <br />
              <i className="text-xl text-black my-6  NanumGothic"></i>
              <i className="fas fa-envelope-square"></i> Emails us at{" "}
              <a
                className="text-black underline font-bold"
                target="_blank"
                href="mailto:anan0810@naver.com>"
              >
                anan0810@naver.com
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

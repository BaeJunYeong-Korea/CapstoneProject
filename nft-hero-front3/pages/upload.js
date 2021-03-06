import Head from "next/head";
import React from "react";
import axios from "axios";
import { useState } from "react";

function ImageUploadExample() {
  const [fileImage, setFileImage] = useState("");
  const [sendImage, setsendImage] = useState("");
  const [name, setName] = useState("");
  const [kind, setKind] = useState("");
  const [klay, setKlay] = useState("");

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setsendImage(e.target.files[0]);
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  const onClick = () => {
    const formData = new FormData();
    formData.append("user", window.localStorage.getItem("userName"));
    formData.append("name", name);
    formData.append("kind", kind);
    formData.append("file", sendImage);

    window.localStorage.setItem("klay", klay);

    axios({
      method: "POST",
      url: "http://localhost:8080/v1/asset/mint",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
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

      <div className="flex auth my-8 font-bold  justify-center items-center vw2">
        <div className="flex auth my-8 font-bold  justify-center items-center vw2"></div>
      </div>
      <div></div>
      <table>
        {" "}
        <tbody>
          {" "}
          <tr>
            {" "}
            <th className="mt-4 ReallyFree  text-2xl  hover:text-blue-400 m-6 text-white">
              Image
            </th>{" "}
            <td>
              <div>
                {" "}
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                  />
                )}
                <div style={{ alignItems: "center", justifyContent: "center" }}>
                  <input
                    name="imgUpload"
                    type="file"
                    accept="image/*"
                    onChange={saveFileImage}
                  />
                  <button
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      width: "55px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteFileImage()}
                  >
                    {" "}
                    ??????{" "}
                  </button>
                </div>
              </div>{" "}
            </td>{" "}
          </tr>{" "}
        </tbody>{" "}
      </table>

      <div className="form-group">
        <label className="mt-4 ReallyFree  text-2xl  hover:text-blue-400 m-6 text-white">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="mt-4 ReallyFree  text-2xl  hover:text-blue-400 m-6 text-white">
          Kind
        </label>
        <input
          type="kind"
          className="form-control"
          placeholder="kind"
          required
          onChange={(e) => setKind(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="mt-4 ReallyFree  text-2xl  hover:text-blue-400 m-6 text-white">
          Klay
        </label>
        <input
          type="klay"
          className="form-control"
          placeholder="klay"
          required
          onChange={(e) => setKlay(e.target.value)}
        />
      </div>

      <button
        className="mt-4 ReallyFree text-4xl border-6 bg-blue-400  text-white hover:text-black p-2"
        onClick={onClick}
      >
        upload
      </button>
    </div>
  );
}
export default ImageUploadExample;

const express = require("express");
const multer = require("multer");
const conv = require("../utils/conv");
const Metadata = require("../model/metadata");
const kip17 = require("../service/kas/kip17");
var router = express.Router();
const endpoint = "http://localhost:8080";

// 메타 데이터와 이미지가 업로드 되는 저장소
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    var filetype = file.originalname.substring(file.originalname.length - 3);
    cb(null, "image-" + Date.now() + "." + filetype);
  },
});
var upload = multer({ storage: storage });

// Kip-17 발행
router.post(
  "/mint",
  upload.single("file"), // 파일에 들어온 이미지를 저장소에 업로드
  async function (req, res, next) {
    console.log(req.body);
    if (!req.file) {
      res.status(500);
      return next(err);
    }

    const img = endpoint + "/images/" + req.file.filename; // 이미지 uri 추출

    // 메타 데이터 저장
    const metadata = new Metadata({
      name: req.body.name,
      description: req.body.kind,
      kind: req.body.kind,
      image: img,
    });
    const doc = await metadata.save();
    const id = "0x" + doc._id.toString(); // 토큰 ID로 mongodb schemas의 id 사용
    const uri = `${endpoint}/v1/metadata/${id}`; // 메타데이터 json 가져옴
    const address = await conv.userToAddress(req.body.user);

    await kip17.issueToken(address, id, uri);

    res.json({ metadata: doc._id.toString() });
  }
);

// 유저의 NFT 조회
router.get("/checkuserNFT", async (req, res) => {
  const user = req.body.user;
  const address = await conv.userToAddress(user);

  const tokens = await kip17.listTokens(address);

  res.json(tokens);
});

// 유저의 NFT 조회
router.get("/showallNFT", async (req, res) => {
  const tokens = await kip17.listallTokens();

  await Promise.all(
    tokens.map(async (element) => {
      const owner = await conv.addressToUser(element.owner);
      const transactionHash = element.transactionHash;
      const id = element.tokenId.replace(/^0x/, "");
      const doc = await Metadata.findById(id);
      const image = doc.image;
      const information = { owner: owner };

      array.push(doc);
    })
  );
  res.json(tokens);
});

// 유저의 전체 NFT 이미지 보여주기
router.post("/showuserNFT", async (req, res) => {
  const address = await conv.userToAddress(req.body.user);
  const tokens = await kip17.listTokens(address);
  const array = [];

  await Promise.all(
    tokens.map(async (element) => {
      const id = element.tokenId.replace(/^0x/, "");
      const doc = await Metadata.findById(id);

      array.push(doc);
    })
  );

  console.log(array);
  res.json(array);
});

// NFT 전송
router.post("/sendNFT", async (req, res) => {
  const user = req.body.user;
  const tokenId = req.body.token;
  const toUser = req.body.to;

  console.log(user, tokenId, toUser);

  const address = await conv.userToAddress(user);
  const to = await conv.userToAddress(toUser);
  const result = await kip17.sendToken(address, tokenId, to);

  res.json(result);
});

module.exports = router;

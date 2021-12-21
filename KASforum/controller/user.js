const express = require("express");
const mongoose = require("mongoose");
const caver = require("caver-js");
const User = require("../model/user");
const wallet = require("../service/kas/wallet");
const node = require("../service/kas/node");
const th = require("../service/kas/th");
const conv = require("../utils/conv");
const router = express.Router();

router.post("/", async (req, res) => {
  // 회원가입

  const account = await wallet.CreateAccount(); // 계정 생성
  console.log(account);

  // mongodb에 name, password, address, publicKey 저장
  const user = new User({
    name: req.body.username,
    password: req.body.password,
    address: account.address,
    publicKey: account.publicKey,
  });

  user.save((err, doc) => {
    if (err) console.error(err);
    console.log(doc);
  });
  // --------------------------------------------

  res.json({
    address: account.address,
  });
});

router.post("/logIn", async (req, res) => {
  // 로그인
  const name = req.body.username;
  const password = req.body.password;

  User.find({ name: name, password: password }, (err, doc) => {
    if (err) console.error(err);
    res.send(doc);
  });
});

// 유저의 Klay 잔액 조회
router.post("/checkBalance", async (req, res) => {
  const address = await conv.userToAddress(req.body.user);
  const balance = await node.getBalance(address);

  res.json({
    balance,
  });
});

// Klay 전송
router.post("/sendKlay", async (req, res) => {
  const from = await conv.userToAddress(req.body.user);
  const to = await conv.userToAddress(req.body.to);
  const amount = req.body.amount;
  console.log(from, to, amount);

  const txHash = await wallet.sendTransfer(from, to, amount);

  res.json({
    txHash,
  });
});

// 유저의 klay 전송 기록 조회
router.post("/klaytransferHistory", async (req, res) => {
  const address = await conv.userToAddress(req.body.user);
  // const starttime = req.query["start-timestamp"];
  // const endtime = req.query["end-timestamp"];

  const history = await th.klayHistory(address); // , starttime, endtime
  const ret = [];
  for (const el of history) {
    const klay = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(el.value),
      "KLAY"
    );

    const item = {
      value: klay,
      timestamp: el.timestamp,
    };
    let target = "";

    if (caver.utils.toChecksumAddress(el.from) === address) {
      item.eventType = "sent";
      target = el.to;
    } else {
      item.eventType = "received";
      target = el.from;
    }

    const targetuser = await conv.addressToUser(target);
    item.target = targetuser !== "" ? targetuser : target;
    ret.push(item);
  }

  res.json(ret);
});

module.exports = router;

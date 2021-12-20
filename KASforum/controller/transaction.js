const express = require("express");
const wallet = require("../service/kas/wallet");
const conv = require("../utils/conv");
const node = require("../service/kas/node");
const kip17 = require("../service/kas/kip17");
const router = express.Router();

// NFT 구매
router.post("", async (req, res) => {
  const from = await conv.userToAddress(req.body.user);
  const to = await conv.userToAddress(req.body.to);
  const balance = await node.getBalance(from);
  const amount = req.body.amount;
  const tokenId = req.body.token;
  console.log(from, to, amount, tokenId, balance);

  if (balance > amount) {
    const txHash = await wallet.sendTransfer(from, to, amount);
    const result = await kip17.sendToken(to, tokenId, from);

    res.json({ result, txHash });
  }
});

module.exports = router;

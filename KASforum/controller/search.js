const express = require("express");
const User = require("../model/user");
var router = express.Router();

// mongodb에서 이름이 비슷한 유저 검색
router.get("", async (req, res) => {
  var pattern = req.body["user-pattern"];

  const doc = await User.find(
    { name: { $regex: `^${pattern}`, $options: "i" } },
    "name"
  );

  const users = [];
  doc.forEach((e) => users.push(e.name));

  res.json({
    users,
  });
});

module.exports = router;

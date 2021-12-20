const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./controller/user"); // 기본 controller
const asset = require("./controller/asset"); // Kip-17 controller
const metadata = require("./controller/metadata"); // 메타데이터
const search = require("./controller/search"); // DB에서 유저 검색
const transaction = require("./controller/transaction"); // 거래

mongoose
  .connect(
    "mongodb+srv://kas-tutorial:kas-tutorial@cluster0.zse1m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      //mongodb atlas 연결
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Successfully connected to MongoDB..."))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use(express.static("public"));
app.use("/v2/account", user); // 계정
app.use("/v1/klaytn", user); // 계정의 잔액 조회
app.use("/v2/tx/value", user); // klay 전송
app.use("/v2/transfer/account", user); // klay 전송 기록 조회
app.use("/v1/asset", asset); // kip-17
app.use("/v1/metadata", metadata); // 메타 데이터 조회
app.use("/v2/search", search); // DB에서 이름이 비슷한 유저 검색
app.use("/transaction", transaction); // 거래

app.listen(8080, () => {
  console.log("Starting at http://localhost:8080\n");
});

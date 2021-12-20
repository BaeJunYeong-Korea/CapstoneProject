const caver = require("caver-js");
const ApiCaller = require("./api_caller");

class Wallet extends ApiCaller {
  constructor() {
    super("https://wallet-api.klaytnapi.com"); // endpoint setting
  }

  async CreateAccount() {
    const options = {
      method: "POST",
      url: "/v2/account",
      json: true,
    };

    return await this.call(options);
  }

  async sendTransfer(from, to, amount) {
    const peb = caver.utils.convertToPeb(amount, "KLAY");
    const hexpeb = caver.utils.numberToHex(peb);

    const options = {
      method: "POST",
      url: "/v2/tx/value",
      body: {
        from: from,
        value: hexpeb,
        to: to,
        submit: true,
      },
      json: true,
    };

    const res = await this.call(options);
    console.log(res);

    return res.transactionHash;
  }
}

const wallet = new Wallet();

module.exports = wallet;

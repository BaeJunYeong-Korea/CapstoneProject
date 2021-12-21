const ApiCaller = require("./api_caller");
const process = require("process");

class Kip17 extends ApiCaller {
  contract = "capstone2"; // Contract Alias

  constructor() {
    super("https://kip17-api.klaytnapi.com");
  }

  async issueToken(address, id, uri) {
    const options = {
      method: "POST",
      url: `/v1/contract/${this.contract}/token`,
      body: {
        to: address,
        id: id,
        uri: uri,
      },
      json: true,
    };

    const res = await this.call(options);
    console.log(res);
  }

  async listallTokens() {
    const options = {
      method: "GET",
      url: `/v1/contract/${this.contract}/token`,
    };

    const res = await this.call(options);
    console.log(res);

    return res.items;
  }

  async listTokens(address) {
    const options = {
      method: "GET",
      url: `/v1/contract/${this.contract}/owner/${address}`,
    };

    const res = await this.call(options);
    console.log(res);

    return res.items;
  }

  async sendToken(address, tokenId, to) {
    const options = {
      method: "POST",
      url: `/v1/contract/${this.contract}/token/${tokenId}`,
      body: {
        sender: address,
        owner: address,
        to: to,
      },
      json: true,
    };

    const res = await this.call(options);
    console.log(res);

    return res;
  }
}

const kip17 = new Kip17();

module.exports = kip17;

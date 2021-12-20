const request = require("request");

class ApiCaller {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async call(options) {
    options.url = this.endpoint + options.url;
    options.json = true; // KAS API 대부분 returns json

    if (!options.headers) options.headers = {};

    // 항상 자동으로 들어가는 헤더를 추가
    options.headers["Content-Type"] = "application/json";
    options.headers["x-chain-id"] = "1001";
    options.headers.Authorization =
      "Basic S0FTS0JKM1c0UTNOSVhPRzNYR0JDNlJZOllqbDlDZnVTcEJSNVRCVzVTR0JBT3F2NXQ4aWc3ZWZiR2VhR3RmbU8=";

    return new Promise((resolve, reject) => {
      // 요청 샘플의 요청 부분을 비동기식으로 처리하는 코드 추가
      request(options, function (error, _response, body) {
        if (error) reject(error);
        else resolve(body);
      });
    });
  }
}

module.exports = ApiCaller;

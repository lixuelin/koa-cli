module.exports = class Response {
  constructor() {
    this.results = {
      code: 200,
      msg: "请求成功",
      success: true,
      data: null,
    };
  }
  success(data = {}) {
    this.results.data = data;
    return this.results;
  }
  failed(code = 500, msg = "请求错误") {
    this.results.code = code;
    this.results.msg = msg;
    this.results.success = false;
    return this.results;
  }
};

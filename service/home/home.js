const Home = require("../../model/home");
const { logger } = require("../../utils/log");
const Response = require("../../utils/resp");
const {} = require("./validate");
const ERROR_CODE = require("./../../utils/error_code");

module.exports = {
  async getHome(ctx) {
    const res = new Response();
    logger.info("test...");
    return res.success((data = { lxl: "hello world!" }));
  },
};

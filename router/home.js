const Router = require("koa-router");
const HomeService = require("./../service/home/home");
const router = new Router({
  prefix: "/api",
});

router.get("/", async (ctx) => {
  let result = await HomeService.getHome(ctx);
  ctx.body = result;
});

module.exports = router.routes();

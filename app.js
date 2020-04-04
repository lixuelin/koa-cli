const Koa = require("koa2");
const bodyParser = require("koa-bodyparser");
const koaStatic = require("koa-static");
const router = require("./router");
const path = require("path");
const { useLogger } = require("./utils/log");
const { port } = require("./config/config");
const pkg = require("./package");
const app = new Koa();

app.use(bodyParser());
app.use(koaStatic(path.join(__dirname, "./public")));
useLogger(app);
router(app);

app.listen(port, () => {
  console.log(`${pkg.name}服务启动成功 端口: ${port}`);
});

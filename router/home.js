const Router = require("koa-router");
const nodeSQL = require("node-sql");
const HomeService = require("./../service/home/home");
const {nodeSQL, config} = require("./../model/index");
const router = new Router({
  prefix: "/api",
});

router.get("/", async (ctx) => {
  let result = await HomeService.getHome(ctx);
  nodeSQL.exec(`Select FirstName, LastName From tbl Where FirstName='Moshe'`, config, function(err, result){
    if(err) return ctx.body={code:500,msg:"error in sql "};
    console.log(result:{rows, field,})
    ctx.body = {code: 200, msg:"success", data:{data:JSON.parse(result)}};
  });
  
  
  
})
});

module.exports = router.routes();

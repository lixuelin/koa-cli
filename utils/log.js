const log4js = require("log4js");
const fileLog = log4js.getLogger();
const httpType = {
  req: "request",
  res: "response",
};
const logMsg = (ctx, type) => {
  let msg = {
    req: {
      type: httpType[type],
      headers: ctx.req.headers,
      query: ctx.query || {},
      body: ctx.body || {},
    },
    res: {
      type: httpType[type],
      body: ctx.body || {},
    },
  };
  return msg[type];
};

log4js.configure({
  appenders: {
    out: { type: "stdout" }, //设置是否在控制台打印日志
    infos: {
      type: "dateFile",
      filename: "./log/blog",
      pattern: "yyyy-MM-dd.log",
      daysToKeep: 30,
      keepFileExt: true,
      alwaysIncludePattern: true,
      layout: {
        type: "pattern",
        pattern: "[%d{yyyy-MM-dd hh:mm:ss}]-[%p]-[%c]-[%h]-[%z]-[%f]-[%l]-[%m]",
      },
    },
  },
  categories: {
    default: {
      appenders: ["out", "infos"],
      level: "info",
      enableCallStack: true,
    },
  },
});

log4js.connectLogger(fileLog, {
  level: "auto",
  format: ":remote-addr :method :url :status :response-time ms",
});

exports.logger = fileLog;

exports.useLogger = (app) => {
  app.use(async (ctx, next) => {
    let start = new Date().getTime();
    fileLog.info(logMsg(ctx, "req"));
    await next();
    let end = new Date().getTime();
    let msg = logMsg(ctx, "res");
    msg.resp_time = end - start + "ms";
    if (ctx.response.status !== 200) {
      msg.error = ctx.response.message;
      return fileLog.error(msg);
    }
    fileLog.info(msg);
  });
};

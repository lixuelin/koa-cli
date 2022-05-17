module.exports = (app) => {
  app.use(require("./home"));
  app.use(require("./log"));
};

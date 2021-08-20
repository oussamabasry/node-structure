let config = {
  dbUrl:
    process.env.DBURL ||
    "mongodb+srv://nodestructure:123456789o@cluster0.re9hl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  logDir: process.env.LOGDIR || "logs",
  viewEngine: process.env.VIEW_ENGINE || "html",
};

module.exports = config;

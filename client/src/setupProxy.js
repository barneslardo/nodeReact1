const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/auth/google", {
      target: "http://localhost:5000" || "http://192.168.0.8:5000"
    })
  );
  app.use(
    proxy("/api/*", {
      target: "http://localhost:5000" || "http://192.168.0.8:5000"
    })
  );
};

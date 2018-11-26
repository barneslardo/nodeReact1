var passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("User has logged out");
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
    console.log(req.user);
  });
};

var passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20").Strategy,
  mongoose = require("mongoose");
keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // we already have a record of that profile ID
        return done(null, existingUser);
      }
      // we don't have a record of this user ID
      const user = await new User({
        googleId: profile.id,
        displayName: profile.displayName,
        givenName: profile.givenName,
        familyName: profile.familyName,
        url: profile.url
      }).save();
      done(null, user);
    }
  )
);

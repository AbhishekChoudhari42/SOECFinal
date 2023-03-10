const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

passport.use(new GoogleStrategy({
    clientID : process.env.CLIENTID,
    clientSecret : process.env.CLIENTSECRET,
    callbackURL : process.env.CALLBACKURL,
    profile : ["profile","user"]

},
function(accessToken,refreshToken,profile,callback){
    callback(null,profile)
}

))

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})
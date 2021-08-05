import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'


export default passport.use( new GoogleStrategy.Strategy({
    clientID:"",
    clientSecret:"",
    callbackURL:''
},(acessToken,refreshToken,profile,done)=>{
    // console.log("acessToken")
    // console.log(acessToken)
    console.log("profile")
    console.log(profile)
    
    done(null,profile.displayName)
}))

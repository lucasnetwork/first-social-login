
import passport from '../config/passport'

export default passport.authenticate("google",{scope:["profile"]})
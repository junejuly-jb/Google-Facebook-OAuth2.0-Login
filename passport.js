const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const User = require('./models/User')
const LocalStrategy = require('passport-local').Strategy
const GooglePlusTokenStrategy = require('passport-google-plus-token')
require('dotenv').config()

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.PASS_PHRASE
}, async (payload, done) => {
    try {
        
        const user = await User.findById(payload.sub)
        if (!user) {
            return done(null, false)
        }

        done(null, user)

    } catch (error) {
        done(error, false)
    }
}))



// GOOGLE Strategy 

passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, async (accessToken, refreshToken, profile, done) => {
    // check user exists
        
        try {

            const userExists = await User.findOne({ "google.id": profile.id })
            if (userExists) {
                console.log('user exists')
                return done(null, userExists)
            }

            const newUser = new User({
                method: 'google',
                google: {
                    id: profile.id,
                    email: profile.emails[0].value
                }
            })
            console.log('new user!')
            await newUser.save()
            done(null, newUser)

        } catch (error) {
            done(error, false, error.message)
        }
        
}))


// LOCAL STRAT
passport.use(new LocalStrategy({
    usernameField: 'email'

}, async (email, password, done) => {
    try {
        const user = await User.findOne({ 'local.email': email })
        
        if (!user) {
            return done(null, false)
        }

        const isMatch = await user.isValidPassword(password)

        if (!isMatch) {
            return done(null, false)
        }
        
        done(null, user)
    } catch (error) {
        done(error, false)
    }
    
}))
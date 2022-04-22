const users = require('../models/user.model');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class authController{
    validateUserNameAndPassword(req, res, next){
        const {userName, password} = req.body;
        users.findOne({ userName: userName })
            .then(async (user) => {
                const valid = await bcrypt.compare(password, user.password);
                if (valid) { 
                    res.locals._id = user._id;
                    res.locals.role = user.role; 
                    res.locals.userName = user.userName;
                    next(); 
                } 
                else { 
                    res.status(403).send("Authenticating username & password failed"); 
                }
            })
            .catch((err) => { 
                console.log(err);
                res.status(409).send("Authenticating username & password failed") 
            });
    }

    setToken(req, res, next) {
        const user = { _id: res.locals._id, role : res.locals.role, userName : res.locals.userName };
        jwt.sign(user, process.env.TOKEN_SECRET_KEY, (err, token) => {
            if (err) {
                console.log(err);
                res.status(503).send("Cannot Set Token");
                return;
            }
            res.locals.token = token;
            next();
        });
    }

    setCookie(req, res, next) {
        const maxAge = 3600000;
        res.cookie('token', res.locals.token, {
            sameSite: 'none',
            secure: true,
            httpOnly: true,
            maxAge : maxAge,
        }).status(200).send({ userName : res.locals.userName, maxAge : maxAge})
    }

    verifyToken(req, res, next){
        jwt.verify(req.cookies.token, process.env.TOKEN_SECRET_KEY, (err, user) => {
            if (err) {
                res.status(403).send("Invalid Token");
                return;
            }
            res.locals.user = user;
            next();
        })
    }
}


module.exports = new authController;
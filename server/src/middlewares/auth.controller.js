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
                    res.locals.avatar = user.avatar;
                    //Tạm thời cookie role không cần thiết mấy vì server đang authorize admin bằng cách kiểm tra database
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
        }).status(200).send({ userName : res.locals.userName, maxAge : maxAge, avatar: res.locals.avatar})
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

    //verify admin dựa trên database bất chấp hiệu năng :)
    verifyAdmin(req, res, next){
        users.findOne({ _id: res.locals.user._id })
            .then((user) => {
                if (!user) res.status(404); //user xóa tk hoặc thay đổi _id trên db
                if (user.role != 0) res.status(200).send(true);
                if (user.role == 0) res.status(403).send(false);
            })
            .catch((err) =>{
                console.log(err);
                res.status(503).send(false);
            })
    }

    clearCookie(req, res, next) {
        res.cookie('token', "none", {
            sameSite: 'none',
            secure: true,
            httpOnly: true,
            maxAge: 0,
        }).status(200).send("Cookie cleared");
    }
}


module.exports = new authController;
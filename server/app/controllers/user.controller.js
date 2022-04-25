const users = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 15;

class userController{
    showAllUsers(req, res, next){
        users.find({})
        .then((users) =>{
            users.map((user) => delete user.password);
            res.status(200).send(users);
        })
        .catch((err) =>{
            console.log(err);
            res.status(403).send("Cannot get all users");
        })
    }

    showUserByID(req, res, next){
        const {id} = req.params;
        users.findOne({_id : id})
        .then((user) => {
            if (!user) {
                res.status(404).send("User doesn't exist");
                return;
            }
            res.send(user);
        })
    }

    getUserInfoThroughCookie(req, res, next){
        res.send(res.locals.user);
    }

    async addUser(req, res) {
        try {
            const userObject = req.body;
            const hashedPassword = await bcrypt.hash(userObject.password, saltRounds);
            userObject.password = hashedPassword
            const newUser = new users(userObject);
            newUser.save()
                .then(() => res.status(200).send({ status: true, message: "sign up successful" }))
                .catch(() => res.status(403).send({ status: false, message: "Tài khoản đã tồn tại !" }));
        }
        catch (e) {
            console.log(e);
            res.status(503).send({ message: "Đăng ký của bạn không được hoàn thành" });
        }
    }
    
}


module.exports = new userController;
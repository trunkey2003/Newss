const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/site.controller');
const profileController = require('../app/controllers/profile.controller');
const userController = require('../app/controllers/user.controller');
const authController = require('../app/middlewares/auth.controller');


/* GET home page. */

// profile route
router.get('/hoso/:id', profileController.showProfileByID);
router.get('/hoso/computers/:id', profileController.readFilesComputer);
router.get('/hoso', profileController.showAllProfile);
router.post('/hoso', profileController.postProfile);

//user route
router.get('/user/:id', userController.showUserByID);
router.get('/user', userController.showAllUsers);
router.post('/user/sign-up', userController.addUser);
router.post('/user/sign-in', authController.validateUserNameAndPassword, authController.setToken, authController.setCookie);
router.get('/user/get-authorization-info', authController.verifyToken, userController.getUserInfoThroughCookie);
router.post('/user/verify-admin', authController.verifyToken, authController.verifyAdmin);


module.exports = router;

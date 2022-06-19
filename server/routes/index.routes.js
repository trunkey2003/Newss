const express = require('express');
const router = express.Router();

const profileController = require('../src/controllers/profile.controller');
const userController = require('../src/controllers/user.controller');
const authController = require('../src/middlewares/auth.controller');
const trackingController = require('../src/controllers/tracking.controller');
const computerController = require('../src/controllers/computer.controller');


/* GET home page. */



//user route
router.get('/user/sign-out', authController.clearCookie)
router.post('/user/sign-up', userController.addUser);
router.post('/user/sign-in', authController.validateUserNameAndPassword, authController.setToken, authController.setCookie);
router.get('/user/:id', userController.showUserByID);
router.get('/user/get-authorization-info', authController.verifyToken, userController.getUserInfoThroughCookie);
router.post('/user/verify-admin', authController.verifyToken, authController.verifyAdmin);
router.get('/user', userController.showAllUsers);

//tracking route
router.post('/tracking/add', trackingController.add);
router.get('/tracking/get', trackingController.get);

//computer route
router.get('/hoso/computers/:id', computerController.readFilesComputeByProfileID);
router.delete('/hoso/computers/:id', computerController.deleteAllFilesComputerByProfileID);
router.get('/hoso/computers', computerController.readAllComputerFiles);

// profile route
router.get('/hoso/:id', profileController.showProfileByID);
router.delete('/hoso/:id', profileController.deleteProfileByID, computerController.deleteAllFilesComputerByProfileID);
router.get('/hoso', profileController.showAllProfile);
router.post('/hoso', profileController.postProfile);

module.exports = router;

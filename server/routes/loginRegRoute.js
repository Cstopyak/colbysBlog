const router = require('express').Router();
const loginRegController = require('../controllers/loginRegController');
const auth = require('../configure/auth');

router.post('register', loginRegController.registerUser);

router.post('/login', loginRegController.loginUser);

router.get('/verify', loginRegController.veryifiedToken);












module.exports = router;
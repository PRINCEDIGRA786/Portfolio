const express = require('express');
const router = express.Router();
const { createuser, login, getuser } = require('../controllers/Usercontroller');
const { body } = require('express-validator');
const { fetchuser } = require('../middleware/fetchUser')

// create user
router.post('/createuser', body('email').isEmail(),
    body('password').isLength({ min: 5 }), createuser);

// user login
router.post('/login', login);

//get user

router.post('/getuser', fetchuser, getuser);

module.exports = router
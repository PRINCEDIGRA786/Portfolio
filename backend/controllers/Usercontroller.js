const jwt = require('jsonwebtoken');
const JWT_SECRET = "JaiShreeRam";
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const { validationResult } = require('express-validator')




const createuser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({
                error: "This Email already exists!!!"
            })
        }
        const secpassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            password: secpassword,
            email: req.body.email,
            name: req.body.name
        })
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ "success": success, "authtoken": authToken })

    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("INTERNAL SERVER ERROR")
    }


}

const login = async (req, res) => {
    let success = false;
    const { email, password } = req.body;
    try {

        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ error: "Try login Using correct ceredentials!! Please" })
        }

        const passwordverify = await bcrypt.compare(password, user.password)
        if (!passwordverify) {
            return res.status(400).json({ error: "Email or Password is Incorrect" })
        }
        const data = {
            user: {
                id: user.id
            }

        }
        success = true
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ "success": success, "authtoken": authToken })

    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("INTERNAL SERVER ERROR")
    }

}

const getuser = async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        // console.log(user)
        res.send(user)
    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("INTERNAL SERVER ERROR")
    }
}

module.exports = { createuser, login, getuser }
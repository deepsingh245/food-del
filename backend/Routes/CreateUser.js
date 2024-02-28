const express = require("express");
const { body, validationResult } = require("express-validator");
const user = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @route   POST api/auth

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name", "error").isLength({ min: 1 }),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const pass = req.body.password;
    bcrypt.hash(pass, 8, async function (err, hash) {
      try {
        const exist = await user.findOne({ email: req.body.email });
        if(exist){
          if (exist.email == req.body.email) {
            return res.json({ msg: "email already exist" });
          }
      }else{
        let newUser = new user({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          location: req.body.location,
        });
        newUser.save();
        res.json({
          status: "success",
          message: "The User has been created!",
        });}
      } catch (e) {
        console.log(e);
        res.status(400).send(e);
      }
    });
  }
);
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let mailid = req.body.email;
    try {
      let prevUser = await user.findOne({ email: mailid }).exec();
      if (!prevUser) {
        return res
          .status(409)
          .json({ message: "No account found with this email" });
      }
      let isMatched = await bcrypt.compare(
        req.body.password,
        prevUser.password
      );
      if (!isMatched) {
        return res
          .status(401)
          .json({ auth: false, message: "Password incorrect" });
      } else {
        let token = jwt.sign({ _id: prevUser._id }, 'key', {
          expiresIn: "2h",
        });
        // localStorage.setItem("authToken",token)
        res
          .header("auth-token", token)
          .send({ auth: true, token: token, profile: prevUser });
      }
    } catch (e) {
      console.log(e);
    }
  }
);
module.exports = router;

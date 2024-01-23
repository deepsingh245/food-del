const express = require('express')
const { body, validationResult } = require('express-validator');
const user = require('../models/user')
const router = express.Router()

router.post('/createuser',[
    body('email').isEmail(),
    body('name','error').isLength({min:1}),
    // body('lastname').isLength({min:1}),
    body('password','incorrect password').isLength({min: 5})
],

(req,res)=>{
const errors = validationResult(req);
if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
}

  try{
        let newUser = new user({
           name: req.body.name,
            // lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            location:req.body.location
            })
             newUser.save();
            
    //    await  user.create({
    //         name : "deep Singh",
    //         email:"deepsingh1907@gmail.com",
    //         password:"123456",
    //         location:"india"
    //     })
        res.json({
            status:'success' ,
            message:'The User has been created!'
        })
            }catch(e){
                console.log(e)
                res.status(400).send(e);
                }
})

module.exports = router;
const express = require('express')
const user = require('../models/user')
const router = express.Router()

router.post('/createuser', (req,res)=>{
    try{
        let newUser = new user({
            name: req.body.name,
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
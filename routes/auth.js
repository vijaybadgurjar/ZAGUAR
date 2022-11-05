const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../keys");
const requireLogin=require("../middleware/requireLogin");


//Register/signup
router.post("/signup", (req, res) => {


    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: " please add all the fields" })
    }

    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user is already exist with the email" });
            }
            bcrypt.hash(password, 12)  //for hashing the password(password will not shows now on database)
                .then(hashedpassword => {

                    const user = new User({
                        email,
                        password:hashedpassword,
                        name
                    });

                    user.save() 
                        .then(user => {
                            res.json({ message: "saved Sucessfully" });
                        })
                        .catch(err => {
                            console.log(err);
                        })

                })

        })

        .catch(err => {
            console.log(err);
        })

});


//Login/Signin
router.post("/signin",(req,res)=>{

    const {email,password}=req.body;
    if(!email || !password)
    {
       return  res.status(422).json({error : "please add email and password"});
    };
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser)
        {
             return res.status(422).json({error : "Invalid email or password"});
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch)
            {
                // res.json("Sucessfully signed in");
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET); //saving user id to _id 
                res.json({token});
            }
            else
            {
                return res.status(422).json({error : "Invalid email or password"});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    })

})

module.exports = router;

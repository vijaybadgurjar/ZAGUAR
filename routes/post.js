const { request } = require("express");
const express = require("express"); 
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin=require("../middleware/requireLogin");
const Post=mongoose.model("Post");

//for all posts 
router.get("/allpost",(req,res)=>{
    Post.find()  //finding all posts without any condition
    .populate("postedBy","_id name")  //it will expand only _id and name
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

//Create new post 
router.post("/createpost",requireLogin,(req,res)=>{
    const {title,body}=req.body;
    if(!title || !body)
    {
        return res.status(422).json({error :"Please add all the fields"});
    }
      req.user.password=undefined  //password will not show with post
      req.user.id=undefined
    const post=new Post({
        title,
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
   
})


// check of my uploaded post
router.get("/mypost",requireLogin,(req,res)=>{  //"requireLogin" for acess req.user._id
    Post.find({postedBy: req.user._id})  
    .populate("postedBy","_id name")  //it will expand only _id and name
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports=router;
const express = require("express");
const asyncExpress = require("express-async-handler");
const User = require("../models/userModel");
const {isEmail} = require("../utils/utils");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Create new User
//@route POST /api/user/register
//@access public
const register = asyncExpress(async (req,res)=>{
    const userName = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    if(!userName || !password || !email || !isEmail(email) || userName.length < 4 || password.length < 5){
        res.status(400);
        throw new Error("Please Enter valid Credentials");
    }

    console.log(`email is ${email}, username is ${userName} and pass is ${password}`)

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exist");
    }

    //hash password
    const hasedPass = await bcyrpt.hash(password,10);
    
    const user = await User.create({
        username:userName,
        email:email,
        password:hasedPass,
    });


    res.status(200).json({email:user.email,user_name:user.username});
});

//@desc Login User
//@route GET /api/user/login
//@access public
const login = asyncExpress(async (req,res)=>{
    res.status(200).send({message:"hello there"});
});

//@desc Get Current User
//@route GET /api/user/current
//@access private
const currentUser = asyncExpress(async (req,res)=>{

});


module.exports = {register,login,currentUser}
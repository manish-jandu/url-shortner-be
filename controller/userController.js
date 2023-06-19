const express = require("express");
const asyncExpress = require("express-async-handler");

//@desc Create new User
//@route POST /api/user
//@access public
const register = asyncExpress(async (req,res)=>{

});

//@desc Login User
//@route GET /api/user
//@access public
const login = asyncExpress(async (req,res)=>{
    res.status(200).send({message:"hello there"});
});

//@desc Get Current User
//@route GET /api/user
//@access private
const currentUser = asyncExpress(async (req,res)=>{

});


module.exports = {register,login,currentUser}
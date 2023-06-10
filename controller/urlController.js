 const asyncExpress = require('express-async-handler');


//@desc Get all Urls
//@route GET /api/urls
//@access public
const getAllUrls = asyncExpress (async (req,res) => {
    res.status(200).json({message:"Getting All urls"});
});

//@desc Add new Url
//@route POST /api/urls
//@access public
const createUrl =asyncExpress (async (req,res) => {
    const url = req.body.url;
    if(!url){
        res.status(400);
        throw new Error("Url is Mandatory");
    }
    res.status(200).json({message:"posting your url"});
});

//@desc get a url
//@route GET /api/urls/:id
//@access public
const getAUrl = asyncExpress (async (req,res) => {
    const id = req.params.id;
    if(!id){
        res.status(400);
        throw new Error("id is Mandatory");
    }
    res.status(200).json({message:"getting a url"});
});

//@desc delete a url
//@route DELETE /api/urls/:id
//@access public
const deleteAUrl = asyncExpress (async (req,res) => {
    const id = req.params.id;
    if(!id){
        res.status(400);
        throw new Error("id is Mandatory");
    }
    res.status(200).json({message:"Deleting a url"});
});


module.exports = {getAllUrls,createUrl,getAUrl,deleteAUrl}
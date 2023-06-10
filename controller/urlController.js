 const asyncExpress = require('express-async-handler');
 const UrlSchema = require("../models/urlModel");
const { validateUrl } = require('../utils/utils');
const shortid = require('shortid');


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

    const orignalUrl = req.body.url;
    console.log("creating url");
    
    if(!orignalUrl){
        res.status(400);
        throw new Error("Url is Mandatory");
    }

    if(!validateUrl(orignalUrl)){
        res.status(400);
        throw new Error("Invalid Url");
    }

    let url = await UrlSchema.findOne({orignalUrl});

    if(url){//already exist
        res.json(url);
    }

    const urlId = shortid.generate();
    const currentUrl = `http://localhost:${process.env.PORT}`
    const shortUrl =    `${currentUrl}/${urlId}`;
    url = await UrlSchema.create({
        url_id: urlId,
        orig_url: orignalUrl,
        short_url: shortUrl
    });


    res.status(200).json(url);
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
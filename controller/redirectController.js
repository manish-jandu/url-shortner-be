const asyncExpress = require('express-async-handler');
const UrlSchema = require("../models/urlModel");


//@desc GET the redirected Url
//@route GET /
//@access public
const redirect = asyncExpress (async (req,res)=>{
    const urlId = req.params.id;
    const urlData = await UrlSchema.findOne({url_id:urlId});

    if(!urlData){
        res.status(400);
        throw new Error("short url doesn't exist ");
    }

    let orignalUrl = urlData.orig_url;
    if(!orignalUrl.startsWith("http") && !orignalUrl.startsWith("https")){
        orignalUrl = `http://${orignalUrl}`;
    }

    res.redirect(orignalUrl);  
});


module.exports = {redirect};

//@desc Get all Urls
//@route GET /api/urls
//@access public
const getAllUrls = (req,res) => {
    res.status(200).json({message:"Pinging Success"});
};

//@desc Add new Url
//@route PUT /api/urls
//@access public
const createUrl = (req,res) => {
    res.status(200).json({message:"Pinging Success"});
};

//@desc get a url
//@route GET /api/urls/:id
//@access public
const getAUrl = (req,res) => {
    res.status(200).json({message:"Pinging Success"});
};

//@desc delete a url
//@route DELETE /api/urls/:id
//@access public
const deleteAUrl = (req,res) => {
    res.status(200).json({message:"Pinging Success"});
};


module.exports = {getAllUrls,createUrl,getAUrl,deleteAUrl}


const redirect = (req,res)=>{
    const id = req.params.id;

    const redirectUrl = 'http://www.google.com';
    res.redirect(redirectUrl);  
};


module.exports = {redirect};
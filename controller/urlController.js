

const getRoot = (req,res) => {
    res.status(200).json({message:"Pinging Success"});
};


module.exports = {getRoot};
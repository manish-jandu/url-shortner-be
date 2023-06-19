const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
    {
        url_id: {
            type: String,
            require: true
        },
        orig_url: {
            type: String,
            require: [true, "Please add a url"]
        },
        short_url:{
            type: String,
            require: [true,"Please add a short url"]
        },
    },
    {
        timestamps:true
    }
);


module.exports = mongoose.model("UrlSchema",urlSchema);
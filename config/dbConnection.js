const mongoDb = require("mongoose");
require("dotenv");

 
const connectDb = async (req,res) => {
    try {
        const connect = await mongoDb.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected",connect.connection.host,connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


module.exports = connectDb;
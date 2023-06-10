const express = require("express");
const errorHanlder = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

connectDb();

app.use(express.json());
app.use('/api/urls',require("./router/urlRoutes"));
app.use('/',require("./router/redirectRoute"));
app.use(errorHanlder);

app.listen(port,()=>{
    console.log("Server started at port ",port);
});  
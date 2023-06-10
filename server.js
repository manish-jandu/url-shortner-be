const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/urls',require("./router/urlRoutes"));
app.use('/',require("./router/redirectRoute"));

app.listen(port,()=>{
    console.log("Server started at port ",port);
});  
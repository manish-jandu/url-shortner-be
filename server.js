const express = require("express");
const app = express();

const port = 4001;

app.use(express.json());
app.use('/api/urls',require("./router/urlRoutes"));
app.use('/',require("./router/redirectRoute"));

app.listen(port,()=>{
    console.log("Server started at port ",port);
}); 
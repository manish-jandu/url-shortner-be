const express = require("express");
const errorHanlder = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const {startSheduler} = require("./scripts/deleteUrl");
const app = express();
const path = require("path");
require("dotenv").config();

const port = process.env.PORT;

connectDb();

app.use(express.json());
app.use('/api/urls',require("./router/urlRoutes"));
app.use('/api/user',require("./router/userRoutes"));
app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../frontend/index.html');
    res.sendFile(indexPath);
});
 
app.use('/',require("./router/redirectRoute"));
app.use(errorHanlder);

startSheduler()

app.listen(port,()=>{
    console.log("Server started at port ",port);
});  
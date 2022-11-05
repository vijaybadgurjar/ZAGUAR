const express = require("express"); 
const app = express();
const PORT="5000";
const mongoose =require('mongoose');



const {MONGOURI}=require("./keys");
mongoose.connect(MONGOURI);

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
})
mongoose.connection.on('err',()=>{
    console.log(err);
})

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));


app.get("/", function (req, res) {
    console.log("home");
    res.send("hello world !");
});








app.listen(PORT, function () { 
    console.log("server is running on " +PORT);
 });
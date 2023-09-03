import express from "express"; 
import ejs from "ejs";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const port = 3000; 
const app = express(); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


//Server request handling
app.get("/", (req, res)=>{
    res.render("home.ejs");
});


app.listen(port, function(){
    console.log("Server started on port 3000.");
});
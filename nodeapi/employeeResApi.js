var express = require("express");
var cors = require(cors);
var app = express();
app.use(cors);
var router = express.Router();
router.get("/employee", function(req,res){
    res.status(200).json(req.employee);
});
app.use("/",router);
app.listen("5800", function(){
    console.log("Started listening at 5800");
});

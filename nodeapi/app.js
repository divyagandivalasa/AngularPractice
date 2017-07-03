var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
var router = express.Router();
 var employees = [
        {
            "id" : "1",
            "Name": "Divya",
            "Gender": "Female",
            "Age": "24",
            "Salary":"300000"
        },
        {
            "id" : "2",
            "Name": "Madhurima",
            "Gender": "Female",
            "Age": "24",
            "Salary":"400000"
        },
        {
            "id" : "3",
            "Name": "Ajay",
            "Gender": "Male",
            "Age": "24",
            "Salary":"350000"
        },
        {
            "id" : "4",
            "Name": "Raju",
            "Gender": "Male",
            "Age": "24",
            "Salary":"300000"
        },
    ];
router.get("/sum", function(req,res){
    var a = req.query.a;
    var b = req.query.b;
    var c = parseInt(a) + parseInt(b);
    res.status(200).json(c);
});
router.get("/employees", function(req,res){
    res.status(200).json(employees);
});
router.get("/emp/:id",function(req,res){
    var employeeid = req.params.id;
    var employee = employees.filter(({id})=>id==employeeid);
    res.status(200).json(employee);
})
app.use("/",router);
app.listen("5800", function(){
    console.log("Started listening at 5800");
});


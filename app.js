const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = ["Start the day with a smile!"];

app.get("/", function (req, res) {


    var today = new Date();



    var options =
    {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleString("en-US", options);



    res.render('list', { kindOfday: day , newListItem: items});
});



app.post("/",function(req,res){
    var item = req.body.newItem;
    
    items.push(item);

    res.redirect("/");

  

});

app.listen(3000, function () {
    console.log("the server is running or port localhost:3000/");
});

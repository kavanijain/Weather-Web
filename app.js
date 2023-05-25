const express=require("express");
const path =require("path");
const hbs = require('hbs');
const app = express();
// const port=8000;

// public static path
const static_path=(path.join(__dirname, "./public"));
const template_path=(path.join(__dirname, "./templates/views"));
const partials_path=(path.join(__dirname, "./templates/partials"));



app.set('view engine', 'hbs');
app.set('views' , template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("/", function(req,res){
    res.render('index');
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/weather", function(req,res){
    res.render("weather");
});

app.get("*", function(req,res){
    res.render("404error" ,{
        errorMsg: 'Oops! Page not found'
    });
});

app.listen(8000, function(){
    console.log("hehe port is working");
});
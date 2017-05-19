var path = require("path");

module.exports = function(app){

//htmlRoutes.js
//Routes that sends the user infomation
app.get("/", function(req, res) {
    console.log("user get index.html");
    res.sendFile(path.join(__dirname, "/../public/index.html"));
    
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey2.html"));
    console.log("user get survey2.html");
})

}
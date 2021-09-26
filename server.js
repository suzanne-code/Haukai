var HTTP_Port = process.env.Port || 8080;
var express = require(express);
var app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(HTTP_Port);

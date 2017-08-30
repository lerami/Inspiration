var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/yoga', function(req,res){
	res.sendFile(path.join(__dirname + '/public/yoga.html'));
})

app.listen(3000);
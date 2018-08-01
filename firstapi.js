var http = require('http');

var express = require('express');

var app = express();

let A={}

app.get('/', function(req, res){

      //res.send({'status':'success'}); 
	res.json('200');
});

app.post('/data',function(req,res){
    let b = req.body;
    A = b;
    res.send(A);
});

app.get('/data',function(req,res){

    res.send(A);
});

var server = app.listen(5000, function(){});
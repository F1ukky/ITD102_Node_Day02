require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

app.get('/', function(req, res){
    res.send('เด็กดี');
});

app.get('/about', function(req, res){
    res.send('Not run');
});

app.listen(PORT, function(){
    console.log('Server is run on port ' + PORT);
});
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

app.get('/', function(req, res){
    res.send('Default Route');
});

app.get('/about', function(req, res){
    res.send('ในวันที่ผมล้ม ผมยืน');
});

app.listen(PORT, function(){
    console.log('Server is walking (Gu mai run) on port ' + PORT);
});
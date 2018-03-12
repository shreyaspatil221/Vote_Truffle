const express=require('express');
const PORT = process.env.PORT || 8080;

let app=express();

app.use(express.static("app"));

app.listen(8080, function(){
    console.log('Express Serer on port'+ PORT);
    });


const express=require("express");
const logger = require("./mdlware/logger");

const app=express()
app.use(logger)
app.use(express.static(__dirname+'/public'));

const port=4001



app.listen(port,(err)=>err? console.log(err):console.log(`app listing on port ${port}`))

const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require("body-parser");
const app = express()
const router = require('./routes/userRoutes')
const User = require('./model/user_schema');
require('./model/config')
const bcrypt = require("bcrypt");
app.use(bodyParser.json());
app.use(express.json());
const userSchema=require('./model/user_schema')
// let email = req.body.email;
// let user = new user(req.body);
app.use('/',router)
app.get('/', function(req , res){
    res.send("Welcome in JS world")
})

app.post('/registerUser')

app.listen(9000 , (req,res)=>{
   console.log('Server is running on port no :9000');
})

const express=require('express');
const cors=require('cors');
const connect=require('./connection');
const book=require('./routes/book');
const user=require('./routes/user');
const app=express();
connect();
app.use(cors());   // this will allow another server
app.use(book);
app.use(user);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000,(err)=>{
    if(err){
        console.log("Problem...");
    }else{
        console.log("Server is running on port 3000...");
    }
})
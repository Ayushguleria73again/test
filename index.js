require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");   
const app = express();
const port = process.env.PORT ;
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: '*'
}))
app.get('/',(req,res)=>{
    res.send('hello this is  a new line fir the server to check if its working fine')
 res.sendStatus(200)
})



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/goalRoutes')
const app = express();

const  PORT=3000;
//handler



//mongodb connected
mongoose.connect('mongodb://127.0.0.1:27017/fitnessgoal').then(()=>{
    console.log("monodb connected!")
}).catch(err=>{
    console.log(err);
})
app.use(express.json());
app.use('/api/v1',router);
app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT} port!`)
})
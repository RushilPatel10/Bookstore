const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://patelrushil1510:8mdlGMOFPR06MbCa@proj4.kfa3vyj.mongodb.net/user");

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log("data base not connected");
    }
    console.log("data base successfully conected");
})

//8mdlGMOFPR06MbCa
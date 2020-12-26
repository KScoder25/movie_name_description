const mongoose =require('mongoose');

mongoose.connect("mongodb://Localhost:27017/moviedb",{useNewUrlParser:true} ,(err)=>{

    if(!err) {console.log("Mongodb connection succesfully")}
    else{console.log('Error in db:'+err)}

});
require('./movie.model');
const mongoose = require('mongoose');

var movieschema = new mongoose.Schema({
    fullname:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    }
})

mongoose.model('Movie',movieschema);

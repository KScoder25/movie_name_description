require('./models/db');

const express = require('express');
const moviecontroller = require('./controllers/moviecontroller');
var app= express();
app.listen(300, () => {
    console.log('express server started');

});
app.use('/movie', moviecontroller);

// start1
const mongoose = require('mongoose');


mongoose.connect('mongodb://0.0.0.0/passportbackup').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB');
})
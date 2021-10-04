const mongoose = require('mongoose');

try 
{
    const client = mongoose.connect('mongodb+srv://truongluu1102:truong123@appdev.o1puv.mongodb.net/test', {
        useNewUrlParser: true,
        // useFindAndModify: true
    })
    console.log("connected")
} catch (e) {
    console.log(e)
}


module.exports = mongoose
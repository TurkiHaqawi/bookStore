const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true
    },
    desc: {
        type:String,
        required:true,
    },
    bookPhoto: {
        type:String,
        required:false
    },
    author: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    username: {
        type:String,
        required:true,
    },
}, {timestamps: true})

module.exports = mongoose.model("Book", BookSchema)
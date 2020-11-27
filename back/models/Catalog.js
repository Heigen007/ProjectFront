const mongoose = require('mongoose')
const item = new mongoose.Schema({
    images: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    colors: {
        type: Array,
        required: true,
        min: 5
    },
    price: {
        type: Number,
        required: true
    }
})

const Catalog = mongoose.model('Catalog', item)
module.exports = { Catalog }
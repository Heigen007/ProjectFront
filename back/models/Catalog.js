const mongoose = require('mongoose')
const CatalogModel = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    items: [{
        image: {
            type: String,
            required: true
        },
        body: {
            images: {
                type: Array,
                required: true,
                min: 4
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true,
                min: 1000
            },
            colors: {
                type: Array,
                required: true,
                min: 4
            },
            materials: {
                type: Array,
                required: true,
                min: 4
            }
        }
    }]
})

const Catalog = mongoose.model('Catalogs', CatalogModel)
module.exports = { Catalog }
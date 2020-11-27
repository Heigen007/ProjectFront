const mongoose = require('mongoose')
const item = new mongoose.Schema({
    imageName: {
        type: Array,
        required: true
    }
})

const HeaderCarousel = mongoose.model('HeaderCarousel', item)
module.exports = { HeaderCarousel }
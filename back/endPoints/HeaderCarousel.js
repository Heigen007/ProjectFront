const express = require('express')
const router = express.Router()

const HeaderCarousel = require('../models/HeaderCarousel.js').HeaderCarousel

router.get('/', async (req, res) => {
    const result = await HeaderCarousel.find().exec()
    res.status(200).send( JSON.stringify(result) )
})

router.post('/', async (req, res) => {
    try {
        const newItem = new HeaderCarousel({
            imageName: req.body.imageName
        })
        const result = await newItem.save()
        res.status(200).send( JSON.stringify( result ) )
    }
    catch(err) {
        res.sendStatus(500)
    }
})

module.exports = router
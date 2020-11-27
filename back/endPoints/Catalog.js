const express = require('express')
const router = express.Router()

const Catalog = require('../models/Catalog.js').Catalog

router.get('/', async (req, res) => {
    const result = await Catalog.find().exec()
    res.status(200).send( JSON.stringify(result) )
})

router.post('/', async (req, res) => {
    try {
        const newItem = new Catalog({
            images: req.body.images,
            title: req.body.title,
            description: req.body.description,
            colors: req.body.colors,
            
        })
        const result = await newItem.save()
        res.status(200).send( JSON.stringify( result ) )
    }
    catch(err) {
        res.sendStatus(500)
    }
})

router.get('/id/:id', async (req, res) => {
    try {
        const result = await Catalog.findById(req.params.id).exec()
        res.status(200).json(result)
    }
    catch(err) {
        res.sendStatus(500)
    }
})

module.exports = router
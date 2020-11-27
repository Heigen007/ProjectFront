const express = require('express')
const router = express.Router()

const Catalog = require('../models/Catalog.js').Catalog

router.get('/', async (req, res) => {
    const result = await Catalog.find().exec()
    console.log(result)
    res.status(200).send( JSON.stringify(result) )
})

router.post('/', async (req, res) => {
    try {
        const newItem = new Catalog({
            image: req.body.image,
            items: req.body.items,
            title: req.body.title
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
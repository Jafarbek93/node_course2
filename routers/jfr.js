const express = require('express')
const router = express.Router()
const Jfr = require('../models/jfr.js')

router.get('/', async (req, res) => {
    try {
        const jfr = await Jfr.find()
        res.json(jfr)
    } catch (error) {
        res.send('Error' + error)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const jfr = await Jfr.findById(req.params.id)
        res.json(jfr)
    } catch (error) {
        res.send('Error' + error)
    }
})

router.post('/', async (req, res) =>  {
    const jfr = new Jfr({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const j1 = await jfr.save()
        res.json(j1)
    } catch (error) {
        res.send('Errorrr')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const jfr = await Jfr.findById(req.params.id)
        jfr.sub = req.body.sub
        const j1 = await jfr.save()
        res.json(j1)
    } catch (error) {
        res.send('Error' + error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const jfr = await Jfr.findById(req.params.id)
        const j1 = await jfr.delete()
        res.send(j1)
    } catch (error) {
        res.send('Error' + error)
    }
})

module.exports = router
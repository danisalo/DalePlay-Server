const router = require("express").Router()

const Field = require('../models/Field.model')
const Club = require('../models/Club.model')
const Event = require('../models/Event.model')

// Get One Field
router.get("/details/:field_id", (req, res, next) => {

    const { field_id } = req.params

    Field
        .findById(field_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Get All Fields
router.get("/all", (req, res, next) => {

    Field
        .find()
        .populate({
            path: 'club',
            select: '_id name location owner'
        })
        .populate({
            path: 'events',
            select: '_id host name timeStart timeEnd players'
        })
        .sort({ sport: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})

// Filter Field by Sport
router.get('/filter', (req, res, next) => {
    const { sport } = req.query

    Field
        .find({ sport })
        .then(fields => {
            res.json(fields)
        })
        .catch(err => next(err))
})

// Create Field
router.post("/create", (req, res, next) => {

    const { sport, type, hourlyPrice, numParticipants, imageUrl, club } = req.body

    Field
        .create({ sport, type, hourlyPrice, numParticipants, imageUrl, club })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Edit Field
router.put("/edit/:field_id", (req, res, next) => {

    const { field_id } = req.params
    const { sport, type, hourlyPrice, numParticipants, imageUrl } = req.body

    Field
        .findByIdAndUpdate(field_id, { sport, type, hourlyPrice, numParticipants, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Delete Field
router.post("/delete/:field_id", (req, res, next) => {

    const { field_id } = req.params

    Field
        .findByIdAndDelete(field_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
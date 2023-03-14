const router = require("express").Router()

const Field = require('../models/Field.model')


router.get("/details/:field_id", (req, res, next) => {

    const { field_id } = req.params

    Field
        .findById(field_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/all", (req, res, next) => {

    Field
        .find()
        .populate({
            path: 'events',
            select: '_id host name timeStart players'
        })
        .sort({ sport: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})

router.get('/filter', (req, res, next) => {
    const { sport } = req.query

    Field
        .find({ sport })
        .populate('events')
        .then(fields => {
            res.json(fields)
        })
        .catch(err => next(err))
})


router.post("/create", (req, res, next) => {

    const { sport, timeSlots, hourlyPrice, maxPlayers, imageUrl, owner } = req.body

    Field
        .create({ sport, timeSlots, hourlyPrice, maxPlayers, imageUrl, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.put("/edit/:field_id", (req, res, next) => {

    const { field_id } = req.params
    const { sport, hourlyPrice, maxPlayers, imageUrl } = req.body

    Field
        .findByIdAndUpdate(field_id, { sport, hourlyPrice, maxPlayers, imageUrl, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.put("/addevent/:field_id/:event_id", (req, res, next) => {

    const { field_id, event_id } = req.params
    console.log(field_id)
    console.log(event_id)

    Field
        .findByIdAndUpdate(field_id, { $addToSet: { events: event_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.delete("/delete/:field_id", (req, res, next) => {

    const { field_id } = req.params

    Field
        .findByIdAndDelete(field_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
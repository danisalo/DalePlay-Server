const router = require("express").Router()
const Event = require('../models/Event.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { verifyToken } = require("../middlewares/verifyToken")
const Field = require('../models/Field.model')
const User = require('../models/User.model')


router.get("/getAll", (req, res, next) => {

    Event
        .find()
        .sort({ timeStart: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})

router.get("/getOne/:event_id", (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))

})

router.get("/getByUser/:user_id", (req, res, next) => {

    const { user_id } = req.params

    Event
        .find({ players: user_id, day: { $gte: new Date() } })
        .populate('players')
        .then(data => res.json(data))
        .catch(err => next(err))
})


router.post("/create", verifyToken, (req, res, next) => {

    const { name, notes, timeSlot, cost, timeStart, playMinTotal, field, day, dayText } = req.body
    const host = req.payload._id
    Event
        .create({ host, name, notes, timeSlot, cost, timeStart, playMinTotal, field, day, dayText })
        .then(event =>
            Event
                .findByIdAndUpdate(event._id, { $addToSet: { players: host } }, { new: true })
                .then(data => res.json(data))
                .catch(err => next(err)))
        .catch(err => next(err))

})

router.put("/edit/:event_id", (req, res, next) => {

    const { event_id } = req.params
    const { name, notes } = req.body

    Event
        .findByIdAndUpdate(event_id, { name, notes })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// ADD participant to event

router.put("/join/:event_id", verifyToken, (req, res, next) => {

    const player = req.payload._id
    const { event_id } = req.params

    Event
        .findByIdAndUpdate(event_id, { $addToSet: { players: player } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))

})


module.exports = router

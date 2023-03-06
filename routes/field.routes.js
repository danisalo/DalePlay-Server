// | GET | /?keyword=query       | Fetch all fields by keyword |
// | GET | /?sport=query         | Fetch all fields by sport   |
// | GET | /details/: field_id   | Field details |
// | GET | /all/club_id          | Fetch all fields by club |

const router = require("express").Router()

const Field = require('../models/Field.model')

// Create Field
router.post("/create", (req, res, next) => {

    const { name, type, hourlyPrice, numParticipants, imageUrl } = req.body

    Field
        .create({ name, type, hourlyPrice, numParticipants, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Edit Field (GET)
router.get("/edit/:field_id", (req, res, next) => {

    const { field_id } = req.params

    Field
        .findById({ field_id })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Edit Field (PUT)
router.put("/edit/:field_id", (req, res, next) => {

    const { name, type, hourlyPrice, numParticipants, imageUrl } = req.body

    Field
        .findByIdAndUpdate({ _id, name, type, hourlyPrice, numParticipants, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

// Delete Field
router.post("/delete/:field_id", (req, res, next) => {

    const { field_id } = req.params

    Field
        .findByIdAndDelete()
        .then(response => res.json(response))
        .catch(err => next(err))
})

// List All Fields
router.get("/all", (req, res, next) => {

    Field
        .find()
        .populate({
            path: 'Club',
            select: '_id name location owner'
        })
        .populate({
            path: 'Event',
            select: '_id host name timeStart timeEnd players'
        })
        .sort({ name: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})


module.exports = router
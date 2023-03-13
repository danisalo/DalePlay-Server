const router = require("express").Router()
const Club = require('../models/Club.model')
const Field = require('../models/Field.model')


router.post("/create", (req, res, next) => {

    const { name, description, location, imageUrl } = req.body

    Club
        .create({ name, description, location, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.get("/getAll", (req, res, next) => {

    Club
        .find()
        .sort({ name: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})

router.get("/getOne/:club_id", (req, res, next) => {

    const { club_id } = req.params

    const clubPromise = Club.findById(club_id).populate("fields")

    const fieldsPromise = Club.findById(club_id)
        .select("fields")
        .populate("fields")
        .then((club) => club.fields)

    Promise.all([clubPromise, fieldsPromise])
        .then(([club, fields]) => {
            const clubWithFields = {
                ...club._doc,
                fields: fields,
            }
            console.log(clubWithFields)
            res.json(clubWithFields)
        })
        .catch((err) => next(err))
})

router.put("/edit/:club_id", (req, res, next) => {

    const { club_id } = req.params
    const { name, description, location, imageUrl } = req.body

    Club
        .findByIdAndUpdate(club_id, { name, description, location, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router
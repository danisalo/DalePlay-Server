const router = require("express").Router()
const Club = require('./../models/Club.model')

router.get("/clubs", (req, res) => {

    Club
        .find()
        .sort({ name: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})

module.exports = router
const router = require("express").Router()
const User = require('../models/User.model')


router.get("/getone/:user_id", (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch((err) => next(err))
})

router.put("/edit/:user_id", (req, res, next) => {

    const { user_id } = req.params
    const { firstName, lastName, username, email, imageUrl } = req.body

    User
        .findByIdAndUpdate(user_id, { firstName, lastName, username, email, imageUrl })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete("/delete/:user_id", (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
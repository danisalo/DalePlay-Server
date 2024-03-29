const router = require("express").Router()

const bcrypt = require('bcryptjs')
const User = require("../models/User.model")

const jwt = require('jsonwebtoken')
const { verifyToken } = require("../middlewares/verifyToken")

router.get('/verify', verifyToken, (req, res, next) => {
    res.json(req.payload)
})

router.post('/register', (req, res, next) => {

    const { firstName, lastName, email, password, username, imageUrl } = req.body

    User
        .create({ firstName, lastName, email, password, username, imageUrl })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})


router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Hay campos sin completar" })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "Usuario inexistente" })
                return
            }

            if (foundUser.validatePassword(password)) {
                const authToken = foundUser.signToken()
                res.status(200).json({ authToken })
            }
            else {
                res.status(401).json({ message: "Contraseña equivocada" })
            }
        })
        .catch(err => next(err))
})


module.exports = router
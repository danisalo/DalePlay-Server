const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.json("All good in here")
})

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const clubsRoutes = require("./club.routes")
router.use("/clubs", clubsRoutes)

const fieldsRoutes = require("./field.routes")
router.use("/fields", fieldsRoutes)


module.exports = router
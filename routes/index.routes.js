const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.json("All good in here")
})

const profileRoutes = require("./profile.routes")
router.use("/profile", profileRoutes)

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const clubsRoutes = require("./club.routes")
router.use("/clubs", clubsRoutes)

const fieldsRoutes = require("./field.routes")
router.use("/fields", fieldsRoutes)

const eventsRoutes = require("./event.routes")
router.use("/events", eventsRoutes)

const uploadRoutes = require("./upload.routes")
router.use("/upload", uploadRoutes)

module.exports = router
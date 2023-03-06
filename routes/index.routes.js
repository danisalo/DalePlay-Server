const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.json("All good in here")
})

const clubsRoutes = require("./clubs.routes")
router.use("/clubs", clubsRoutes)

module.exports = router
const Router = require("express")
const bcrypt = require("bcryptjs")
// eslint-disable-next-line no-unused-vars
const { check, validationResult } = require("express-validator")
const User = require("../models/User")

const router = new Router()

router.post("/registration", async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Uncorrect request", errors })
    }
    const { email, password } = req.body

    const candidate = User.findOne({ email })
    if (candidate) {
      return res
        .status(400)
        .json({ message: `User with email ${email} already exist` })
    }
    const hashPassword = await bcrypt.hash(password, 15)
    const user = new User({ email, password: hashPassword })
    await user.save()
    return res.json({ message: "User was create" })
  } catch (e) {
    console.log(e)
    res.send({ message: "Server error" })
  }
})

module.exports = router

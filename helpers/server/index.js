const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")

const app = express
const PORT = config.get("serverPort")
app.use("/api/auth", authRouter)
const start = async () => {
  try {
    await mongoose.connect(config.get("dbUrl"))
    app.listen(PORT, () => {
      console.log("Server start on port", PORT)
    })
  } catch (e) {

  }
}
start()

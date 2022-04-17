const express = require("express")

const app = express()

app.use(express.json())

//Route imports
const productRouter = require("./routes/productRoute")

app.use("/api/v1", productRouter)

module.exports = app

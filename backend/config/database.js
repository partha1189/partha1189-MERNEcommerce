const mongoose = require("mongoose")

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`Mongo DB connected with ${data.connection.host}`)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = connectDatabase

import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config();

const db = mongoose.connect(`${process.env.MONGODB_SECRET_KEY}`).then((res) => {
  return console.log("mongoDB connected")
}).catch((err) => {
  console.log(err)
})

export default db;
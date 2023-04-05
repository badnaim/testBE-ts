import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import cors from "cors"
import movieRouter from "./routes/movie"
import db from "./config/mongodb-config"
import mongoose from "mongoose"
import mongodb from "mongodb"
import { config } from "./config/config"  

dotenv.config()

const app: Express = express()
const port = process.env.PORT;

app.use(cors())
app.use(movieRouter)

mongoose.connect(config.mongo.url, {retryWrites: true, w: 'majority'}).then(() => {console.log('connected')}).catch(error => {console.log(error)})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + ts server')
})

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
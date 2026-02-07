import express from "express";

import cors from "cors"
import cookieParser from "cookie-parser"
// Correct imports
import db from './database/index';
import userRoutes from './routes/userRoutes';

import { corsUrl, port } from "./config"
import todoRoutes from "./routes/todoRoutes"
import { errorHandler } from "./middleware/errorMiddleware"
import loggers from "./cor/loggers";

const PORT = port ?? 8080

 const app = express()

app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }))

app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/users", userRoutes)
app.use("/api/todo", todoRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  loggers.info(`Server is running on port ${PORT}`)
})





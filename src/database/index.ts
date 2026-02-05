import "dotenv/config"
// require("dotenv").config()
import mongoose from "mongoose"


const MONGODB_URI="mongodb+srv://mawais01980_db_user:NnjaVWp0Ph7MEH7y@cluster0.rtaqqiy.mongodb.net/?appName=Cluster0"


mongoose
  .connect(MONGODB_URI)
  .then(() => "MongoDB Connected")
  .catch(err => console.log(err))

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// require("dotenv").config()
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = "mongodb+srv://mawais01980_db_user:NnjaVWp0Ph7MEH7y@cluster0.rtaqqiy.mongodb.net/?appName=Cluster0";
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => "MongoDB Connected")
    .catch(err => console.log(err));
//# sourceMappingURL=index.js.map
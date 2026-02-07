import express, { Router } from "express"
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController"
import validateReq, { validationSource } from "helper/validatereq.js"
import User from "models/userModel.js"
import { loginSchema } from "helper/validate.js"

const router: Router = express.Router()

router.route("/login").post(validateReq(loginSchema, validationSource.BODY), loginUser)
router.route("/register").post(registerUser)
router.route("/logout").get(logoutUser)

export default router

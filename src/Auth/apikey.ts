

import express, { Request, Response, NextFunction } from "express"
import validateReq from "helper/validatereq"
import { appischema } from "./schema"
import { validationSource } from "helper/validatereq"
import { Header } from "./utils"



const router = express.Router()



export default router.use(validateReq(appischema, validationSource.HEADER),

    async (req: Request, res: Response, next: NextFunction) => {

        const key = req.headers[Header.API_KEY]?.toString().trim()
    })

if (!key) {
    return res.status(400).json({ message: "API key is required" })
}
const apikey = await findByKey(key)
if (!apikey) {
    return res.status(401).json({ message: "Invalid API key" })
}
req.apikey = apikey
return next()


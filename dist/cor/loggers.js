import { createLogger, format, transports } from "winston";
import "winston-daily-rotate-file";
import { Logdiractory } from "../config";
import path from "path";
import fs from "fs";
let dir = Logdiractory ? Logdiractory : "logs";
if (!dir)
    dir = path.resolve("logs");
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
const loglevel = process.env.NODE_ENV === "production" ? "debug" : "warn";
const dailyRotateTransport = new transports.DailyRotateFile({
    level: loglevel,
    filename: `${dir}/%DATE%-results.log`,
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    format: format.combine(format.errors({ stack: true }), format.timestamp(), format.json(), format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`))
});
export default createLogger({
    transports: [
        new transports.Console({
            level: loglevel,
            format: format.combine(format.errors({ stack: true }), format.timestamp(), format.colorize(), format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`), format.simple())
        }),
        dailyRotateTransport,
    ],
    exceptionHandlers: [dailyRotateTransport],
    exitOnError: false,
});
//# sourceMappingURL=loggers.js.map
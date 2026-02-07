"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./database/index.js");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const config_js_1 = require("./config.js");
const todoRoutes_js_1 = __importDefault(require("./routes/todoRoutes.js"));
const errorMiddleware_js_1 = require("./middleware/errorMiddleware.js");
const PORT = config_js_1.port ?? 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: config_js_1.corsUrl, optionsSuccessStatus: 200 }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/users", userRoutes_js_1.default);
app.use("/api/todo", todoRoutes_js_1.default);
app.use(errorMiddleware_js_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map
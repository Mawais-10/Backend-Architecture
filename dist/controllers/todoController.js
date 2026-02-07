"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.editTodo = exports.getTodos = exports.createTodo = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const todoModel_js_1 = __importDefault(require("../models/todoModel.js"));
exports.createTodo = (0, express_async_handler_1.default)(async (req, res) => {
    const { title, description } = req.body;
    console.log(req.user);
    if (!title || !description) {
        res.status(400);
        throw new Error("Title and Description are required");
    }
    await todoModel_js_1.default.create({ user: req.user, title, description });
    res.status(201).json({ title, description });
});
exports.getTodos = (0, express_async_handler_1.default)(async (req, res) => {
    const user = req.user;
    const todos = await todoModel_js_1.default.find({
        user: user,
    });
    res.json(todos);
});
exports.editTodo = (0, express_async_handler_1.default)(async (req, res) => {
    const { title, description, status } = req.body;
    const user = req.user;
    if (!title || !description || !status) {
        res.status(400);
        throw new Error("Title, Description, and Status are required");
    }
    const todo = await todoModel_js_1.default.findById(req.params.id);
    if (todo?.user.toString() !== user._id.toString()) {
        res.status(401);
        throw new Error("Not authorized to update this todo");
    }
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }
    todo.title = title;
    todo.description = description;
    todo.status = status;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
});
exports.deleteTodo = (0, express_async_handler_1.default)(async (req, res) => {
    const todo = await todoModel_js_1.default.findById(req.params.id);
    if (todo) {
        await todo.deleteOne();
        res.json({ message: "Todo removed" });
    }
    else {
        res.status(404);
        throw new Error("Todo not found");
    }
});
//# sourceMappingURL=todoController.js.map
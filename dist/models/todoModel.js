import mongoose, { Schema } from "mongoose";
export const Document = "TodoDocument";
export const collectionName = "todos";
export var status;
(function (status) {
    status["NOT_STARTED"] = "not-started";
    status["IN_PROGRESS"] = "in-progress";
    status["DONE"] = "done";
})(status || (status = {}));
const todoModel = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: status.NOT_STARTED,
        enum: Object.values(status),
    },
}, {
    timestamps: true,
});
const Todo = mongoose.model(Document, todoModel, collectionName);
export default Todo;
//# sourceMappingURL=todoModel.js.map
import mongoose from "mongoose";
export interface TodoDocument extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Document = "TodoDocument";
export declare const collectionName = "todos";
export declare enum status {
    NOT_STARTED = "not-started",
    IN_PROGRESS = "in-progress",
    DONE = "done"
}
declare const Todo: mongoose.Model<TodoDocument, {}, {}, {}, mongoose.Document<unknown, {}, TodoDocument, {}, {}> & TodoDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Todo;
//# sourceMappingURL=todoModel.d.ts.map
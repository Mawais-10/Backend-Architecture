import mongoose, { Schema } from "mongoose"

export interface TodoDocument extends mongoose.Document {
  user: mongoose.Types.ObjectId
  title: string
  description: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export const Document = "TodoDocument"
export const collectionName = "todos"
export enum status {
  NOT_STARTED = "not-started",
  IN_PROGRESS = "in-progress",
  DONE = "done",
}




const todoModel = new Schema<TodoDocument>(
  {
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
  },
  {
    timestamps: true,
  }
)

const Todo = mongoose.model<TodoDocument>(Document, todoModel, collectionName)

export default Todo

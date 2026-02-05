import type { Request } from "express";

declare interface AppRequest extends Request  {
    user?:User
}
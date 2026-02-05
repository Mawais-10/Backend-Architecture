import mongoose, { Model } from "mongoose";
export interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    matchPassword(enteredPassword: string): Promise<boolean>;
}
export interface UserModel extends Model<UserDocument> {
    matchPassword(enteredPassword: string): Promise<boolean>;
}
export declare const DocumentName = "User";
export declare const collectionName = "users";
declare const User: Model<UserDocument>;
export default User;
//# sourceMappingURL=userModel.d.ts.map
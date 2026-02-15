import mongoose, { model, Schema } from "mongoose"


export enum PermissionsEnum {
    GENERAL = "GENERAL",
}


export const Documentname = "Apikey"
export const Collectionname = "Apikeys"


interface IApikey {
    key: string;
    version: number;
    Permissions: PermissionsEnum[];
    status: boolean;
}


const apischema = new Schema<IApikey>({
    key: {
        type: String,
        required: true,
        unique: true,
        maxlength: 1024,
        trim: true,
    },
    version: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    Permissions: {
        type: [
            {
                type: String,
                required: true,
                enum: Object.values(PermissionsEnum)
            }
        ], required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
)


apischema.index({ key: 1 }, { unique: true })

export const ApikeyModel = model<IApikey>(Documentname, apischema, Collectionname)

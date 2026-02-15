import IApikey, { ApikeyModel } from "../models/Apikeymodel"


async function createApiKey(key: string): Promise<IApikey | null> {
    return ApikeyModel.findOne({ key, status: true })

}


export { createApiKey }
import { ZodError } from "zod";
import { ZodSchema } from "zod/v3";


export enum validationSource {
    BODY = "body",
    QUERY = "query",
    PARAMS = "params",
    HEADER = "header",
}
const validateReq =
    (schema: ZodSchema, source: validationSource = validationSource.BODY) =>
        (req: any, res: any, next: any) => {
            try {
                const data = schema.parse(req[source]);
                req[source] = data;
                next();
            } catch (err) {
                if (err instanceof ZodError) {
                    return next({
                        statusCode: 400,
                        message: "Validation Error",
                        errors: err.issues,
                    });
                }
                next(err);
            }
        };

export default validateReq;
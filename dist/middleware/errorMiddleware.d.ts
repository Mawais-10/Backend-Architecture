import type { Request, Response, NextFunction } from "express";
declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
declare const notFound: (req: Request, res: Response, next: NextFunction) => void;
export { errorHandler, notFound };
//# sourceMappingURL=errorMiddleware.d.ts.map
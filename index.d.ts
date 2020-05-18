import Express from "express";
export declare function authMiddleware(req: Express.Request, res: Express.Response, next: () => void): Promise<void | Express.Response<any>>;

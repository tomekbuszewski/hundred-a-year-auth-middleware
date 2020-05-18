"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function authMiddleware(req, res, next) {
    try {
        const request = await axios_1.default({
            method: "POST",
            url: `${process.env.AUTH_SERVER || "http://localhost:3003"}/verify`,
            headers: req.headers,
        });
        if (request.status === 200) {
            return next();
        }
    }
    catch {
        return res.status(401).send("");
    }
}
//# sourceMappingURL=index.js.map
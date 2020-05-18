import axios from "axios";
import Express from "express";

export async function authMiddleware(
  req: Express.Request,
  res: Express.Response,
  next: () => void,
) {
  try {
    const request = await axios({
      method: "POST",
      url: `${process.env.AUTH_SERVER || "http://localhost:3003"}/verify`,
      headers: req.headers,
    });

    if (request.status === 200) {
      return next();
    }
  } catch {
    return res.status(401).send("");
  }
}

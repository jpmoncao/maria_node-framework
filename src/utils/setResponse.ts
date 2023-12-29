import { Response } from "express";

export default function setResponse(res: Response, status: number, data: object | null, msg: string) {
    return res.status(status).json({ data, msg })
};
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

declare global {
    namespace Express {
        interface Request {
            id_user?: string | JwtPayload | undefined;
        }
    }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
    dotenv.config();
    const tokenHash = process.env.TOKEN_HASH || '';

    const token = req.headers.authorization?.split(' ')[1] || '';

    jwt.verify(token, tokenHash, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: 'The token is invalid!' });
        }

        req.id_user = (decoded as JwtPayload)?.id_user;
        next();
    });
}

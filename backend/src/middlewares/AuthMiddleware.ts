import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayLoad {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.sendStatus(401);

    }
    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, '@uhjiihh2324jnsd');

        const { id } = data as TokenPayLoad;
        request.userId = id;

        return next();
    } catch(err) {
      return response.sendStatus(401);

    }
}
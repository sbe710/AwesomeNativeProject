import { Request, Response } from 'express';
import * as compression from 'compression';

export default function shouldCompress(req: Request, res: Response) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false;
    }

    // fallback to standard filter function
    return compression.filter(req, res);
}

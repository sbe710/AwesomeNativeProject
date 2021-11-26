import * as express from 'express';

const autoRouter = express.Router();

autoRouter.get('/', (req, res) => {
    res.status(200).json({ prop: 'Hello world' });
});

export { autoRouter };

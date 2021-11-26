import * as express from 'express';
import { AutoModel } from '../db/models/auto.model';

const autoRouter = express.Router();

// @route  GET api/auto
// @desc   Get all autos
// @access Private
autoRouter.get('/', async (req, res) => {
    try {
        const autos = await AutoModel.find().sort({ date: -1 }); // from the latest one to the first
        res.status(200).json(autos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  POST api/auto
// @desc   Create a auto
// @access Private
autoRouter.post('/', async (req, res) => {
    console.log('REQUEST', req.body);

    const auto = new AutoModel({ autoName: req.body.autoName, autoNumber: req.body.autoNumber });
    await auto.save();

    res.status(200).json({ auto });
});

export { autoRouter };

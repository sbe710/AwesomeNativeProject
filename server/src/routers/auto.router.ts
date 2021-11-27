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
    try {
        const auto = new AutoModel({ autoName: req.body.autoName, autoNumber: req.body.autoNumber });
        await auto.save();

        res.status(200).json(auto);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  DELETE api/auto/:id
// @desc   Delete auto by id
// @access Private
autoRouter.delete('/:id', async (req, res) => {
    try {
        const auto = await AutoModel.findById(req.params.id);

        if (!auto) {
            return res.status(404).json({ msg: 'Auto not found' });
        }

        await auto.remove();

        const autos = await AutoModel.find().sort({ date: -1 }); // from the latest one to the first
        res.status(200).json(autos);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Auto not found' });
        }
        res.status(500).send('Server Error');
    }
});

export { autoRouter };

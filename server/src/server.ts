import express from 'express';
import * as bodyParser from 'body-parser';
import * as routers from './routers';
import compression from 'compression';
import shouldCompress from './helpers/server.helper';
import cors from 'cors';

const app = express(),
    port = process.env.NODEJS_PORT || 3000,
    root = '/api/v1/',
    isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    require('dotenv').config();
    // console.log(process.env.CUSTOM_VARIABLE);
}

// Add your mock router here
const appRouters = [
    {
        url: 'auto',
        middleware: routers.autoRouter,
    },
];

app.use(
    cors({
        credentials: !isProduction,
    })
);
app.use(bodyParser.json());

app.use(compression({ filter: shouldCompress }));

appRouters.forEach(router => app.use(root + router.url, router.middleware));

app.listen(port, () => {
    console.log(`Mock server is listening on port ${port}`);
});

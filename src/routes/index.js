import express from 'express';
import config from '../config';
import middleware from '../middleware';
import intializeDb from '../db';
import compareprice from '../controller/compareprice';

let router = express();

// connect to db
intializeDb(db => {

    // internal middleware
    router.use(middleware({ config, db }));

    // api routes v1 (/v1)
    router.use('/compareprice', compareprice({ config, db }));

});

export default router;
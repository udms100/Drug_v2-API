import http from 'http';
import express from 'express';
import bodypaser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// // app.use(bodyparser.json({
//     limit:config.bodyLimit
// }));

// api routes v1
app.use('/v1', routes);
app.server.listen(config.port);
console.log( `Started on the port ${app.server.address().port}`);

export default app;
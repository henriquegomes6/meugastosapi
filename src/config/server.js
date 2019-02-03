import { urlencoded, json } from 'body-parser';
import express from 'express';
import cors from './cors'
import queryParser from 'express-query-int/'

const server = express()
const port = 3003;

server.use(urlencoded({ extended: true }));
server.use(json());
server.use(cors);
server.use(queryParser());

server.listen(port, function () {
    console.log('API IS RUN!!!')
})

export default server;
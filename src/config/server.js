import { urlencoded, json } from 'body-parser';
import express from 'express';

const server = express()
const port = 3003;

server.use(urlencoded({ extended: true }));
server.use(json());

server.listen(port, function () {
    console.log('API IS RUN!!!')
})

module.exports = server;
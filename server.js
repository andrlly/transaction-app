const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/transaction-app'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/transaction-app/index.html'))
})

app.listen(process.env.PORT || 8080);

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('transaction.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 4000);







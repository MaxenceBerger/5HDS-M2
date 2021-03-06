const http = require('http');
const express = require('express');
var cors = require('cors');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}));

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use('/', function(req, res) {
    res.send('5hds project works');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);
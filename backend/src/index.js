const  routes = require('./routes');
const express = require('express');


const app = express();
app.use(express.json())
app.use(routes);

app.listen(3333);    
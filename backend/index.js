const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const route = require('./routes/route');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', route);

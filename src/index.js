const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express()
const morgan = require('morgan');
app.use(express.json()) // for parsing application/json
app.use(morgan('dev'));
app.use(cors());
const port = 5000;
//Router & API routes
app.use(require('./src/routes/index.js'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
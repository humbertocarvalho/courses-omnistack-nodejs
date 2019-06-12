const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(process.env.URI_DB, { useNewUrlParser: true });

app.use(require('./routes'));

app.listen(3333);

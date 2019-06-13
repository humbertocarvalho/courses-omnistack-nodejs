const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config();

mongoose.connect(process.env.URI_DB, { useNewUrlParser: true });

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
);
app.use(require('./routes'));

app.listen(3333);

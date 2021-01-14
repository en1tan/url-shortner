var express = require('express');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const slugRouter = require('./routes/slug');
const urlRouter = require('./routes/url');

var app = express();

mongoose.connect('mongodb+srv://x1k:hero@cluster0.gznkd.gcp.mongodb.net/url-shortner?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected successfully")).catch(() => "Error connecting to database.");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/slug', slugRouter);
app.use('/url', urlRouter);

module.exports = app;

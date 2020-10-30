const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require("path");

const PORT = 3100;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

/*
mongoose.connect('mongodb://localhost/HW17', {
  useNewUrlParser: true,
  useFindAndModify: false,
});
*/

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/HW17",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// routes
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});

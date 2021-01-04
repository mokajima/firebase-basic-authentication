const basicAuth = require('express-basic-auth');
const express = require('express');
const functions = require('firebase-functions');

const app = express();

const staticUserAuth = basicAuth({
  challenge: true,
  users: {
    'Admin': 'secret1234',
  },
});

app.get('/', staticUserAuth, (req, res) => {
  res.status(200).send('You passed');
});

exports.app = functions.https.onRequest(app);

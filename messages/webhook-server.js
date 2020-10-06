'use strict';
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/webhooks/inbound-message', (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app.post('/webhooks/message-status', (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app.listen(3000)

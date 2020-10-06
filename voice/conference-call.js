require('dotenv').config({path: __dirname + '/../.env'})
const CONF_NAME = process.env.CONF_NAME

const express = require('express');
const app = express()

app.use(express.json())

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'talk',
      text: 'Please wait while we connect you to the conference'
    },
    {
      action: 'conversation',
      name: CONF_NAME
    }
  ]

  response.json(ncco)
}

app.get('/webhooks/answer', onInboundCall)

app.listen(3000)

require('dotenv').config({path: __dirname + '/../.env'})
const CONF_NAME = process.env.CONF_NAME

const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'talk',
      text:
        "You are joining a conference that was created using Vonage's Voice API.",
    },
    {
      action: 'conversation',
      name: 'vonage-conference',
    },
  ];

  response.json(ncco)
}

app.get('/webhooks/answer', onInboundCall)

app.listen(3000)

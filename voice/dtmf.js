const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'talk',
      text:
        "Hi, this call collects dtmf input using Vonage's Voice API. Please press a couple of buttons on your phone keypad",
      voice_name: 'Amy',
    },
    {
      action: 'input',
    },
  ];

  response.json(ncco)
}

const onInput = (request, response) => {
  const dtmf = request.body.dtmf

  const ncco = [{
    action: 'talk',
    text: `You pressed ${dtmf}`
  }]

  response.json(ncco)
}

app
  .get('/webhooks/answer', onInboundCall)
  .post('/webhooks/dtmf', onInput)

app.listen(3000)

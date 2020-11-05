const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'talk',
      text: 'Please tell us, how can we help you today?',
      bargeIn: true,
    },
    {
      eventUrl: ['https://api.example.com/callbacks/events'],
      eventMethod: 'POST',
      action: 'input',
      speech: {
        uuid: ['aaaaaaaa-bbbb-cccc-dddd-0123456789ab'],
        language: 'en-gb',
        context: ['support', 'buy', 'credit', 'account'],
      },
    },
  ];
  response.json(ncco)
}

const onInput = (request, response) => {
  const speech = request.body.speech.results[0].text

  const ncco = [{
    action: 'talk',
    text: `You said ${speech}`
  }]

  response.json(ncco)
}

app
  .get('/webhooks/answer', onInboundCall)
  .post('/webhooks/asr', onInput)

app.listen(3000)

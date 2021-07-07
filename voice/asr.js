const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const onInboundCall = (request, response) => {
  const ncco = [{
      action: 'talk',
      text: 'Please say something',
    },
    {
      action: 'input',
      type: ['speech'],
      eventUrl: [`${request.protocol}://${request.get('host')}/webhooks/asr`],
      speech: {
        endOnSilence: 1,
        language: "en-US",
        uuid: [request.query.uuid]
      }
    }
  ]
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

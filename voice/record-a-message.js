const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const onInboundCall = (request, response) => {
  const ncco = [{
      action: 'talk',
      text: 'Please leave a message after the tone, then press #. We will get back to you as soon as we can.'
    },
    {
      action: 'record',
      endOnKey: '#',
      beepStart: 'true',
      endOnSilence: "3",
      eventUrl: [
        `${request.protocol}://${request.get('host')}/webhooks/recordings`
      ]
    },
    {
      action: 'talk',
      text: 'Thank you for your message. Goodbye.'
    }
  ]

  response.json(ncco)
}

const onRecording = (request, response) => {
  const recording_url = request.body.recording_url
  console.log(`Recording URL = ${recording_url}`)

  response.status(204).send()
}

app
  .get('/webhooks/answer', onInboundCall)
  .post('/webhooks/recordings', onRecording)

app.listen(3000)

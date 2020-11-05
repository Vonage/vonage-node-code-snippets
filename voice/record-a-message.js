const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const onInboundCall = (request, response) => {
  const ncco = [
    ({
      action: 'record',
    },
    {
      action: 'talk',
      text:
        'Hi, this call records this message. Check the parameters sent to the event url webhook endpoint and find the link you need to download this recording.',
      voice_name: 'Amy',
    })
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

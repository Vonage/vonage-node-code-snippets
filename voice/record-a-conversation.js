require('dotenv').config({path: __dirname + '/../.env'})


const CONF_NAME = process.env.CONF_NAME

const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const onInboundCall = (request, response) => {
  const ncco = [{
    "action": "conversation",
    "name": CONF_NAME,
    "record": "true",
    "eventMethod": "POST", //This currently needs to be set rather than default due to a known issue https://help.nexmo.com/hc/en-us/articles/360001162687
    "eventUrl": [`${request.protocol}://${request.get('host')}/webhooks/recordings`]
  }]
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

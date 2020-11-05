const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/webhooks/answer', (req, res) => {
  const ncco = [
    {
      action: 'talk',
      text:
        "Hi, this call collects dtmf input using the Vonage Voice API. Please press a couple of buttons on your phone keypad",
      voice_name: 'Amy',
    },
    {
      action: 'input',
    },
  ]

  res.json(ncco)
})

app.post('/webhooks/events', (req, res) => {
  console.log(req.body)
  res.send(200);
})

app.post('/webhooks/dtmf', (req, res) => {
  const ncco = [{
    action: 'talk',
    text: `You pressed ${req.body.dtmf}`
  }]

  res.json(ncco)
})

app.listen(3000)

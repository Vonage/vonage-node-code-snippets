const express = require('express')
const app = express()

app.use(express.json())

app.get('/webhooks/answer', (req, res) => {
  const ncco = [{
      action: 'talk',
      bargeIn: true,
      text: 'Hello. Please enter a digit.'
    },
    {
      action: 'input',
      maxDigits: 1,
      eventUrl: [`${req.protocol}://${req.get('host')}/webhooks/dtmf`]
    }
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

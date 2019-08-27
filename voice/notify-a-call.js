const app = require('express')()

const onInboundCall = (request, response) => {
  const ncco = [{
      "action": "talk",
      "text": "Thanks for calling the notification line"
    },
    {
      "action": "notify",
      "payload": {
        "foo": "bar"
      },
      "eventUrl": [
        `${request.protocol}://${request.get('host')}/webhooks/notification`
      ]
    },
    {
      "action": "talk",
      "text": "You will never hear me as the notification URL will return an NCCO "
    }
  ]

  response.json(ncco)
}

const onNotification = (request, response) => {
  const ncco = [{
    "action": "talk",
    "text": "Your notification has been received, loud and clear"
  }]

  response.json(ncco)
}

app
  .get('/webhooks/answer', onInboundCall)
  .post('/webhooks/notification', onNotification)

app.listen(3000)

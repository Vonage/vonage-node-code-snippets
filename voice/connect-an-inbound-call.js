require('dotenv').config({path: __dirname + '/../.env'});
const TO_NUMBER = process.env.YOUR_SECOND_NUMBER;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;

const app = require('express')()

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'connect',
      from: 'VONAGE_NUMBER',
      endpoint: [
        {
          type: 'phone',
          number: 'TO_NUMBER',
        },
      ],
    },
    {
      action: 'talk',
      text: 'You are connected',
    },
  ];

  response.json(ncco)
}

app.get('/webhooks/answer', onInboundCall)

app.listen(3000)

require('dotenv').config({ path: __dirname + '/../.env' });
const YOUR_SECOND_NUMBER = process.env.YOUR_SECOND_NUMBER;
const VONAGE_NUMBER = process.env.VONAGE_NUMBER;

const Express = require('express');

const app = new Express();

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'connect',
      from: VONAGE_NUMBER,
      endpoint: [
        {
          type: 'phone',
          number: YOUR_SECOND_NUMBER,
        },
      ],
    },
  ];

  response.json(ncco);
};

app.get('/webhooks/answer', onInboundCall);

app.listen(3000);

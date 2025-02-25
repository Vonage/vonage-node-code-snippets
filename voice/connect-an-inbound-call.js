require('dotenv').config({ path: __dirname + '/../.env' });
const Express = require('express');

const app = new Express();
const port = process.env.PORT || 3000;

const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
const VOICE_TO_NUMBER = process.env.VOICE_TO_NUMBER;

const onInboundCall = (_, response) => {
  const ncco = [
    {
      action: 'connect',
      from: VONAGE_NUMBER,
      endpoint: [
        {
          type: 'phone',
          number: VOICE_TO_NUMBER,
        },
      ],
    },
  ];

  response.json(ncco);
};

app.get('/webhooks/answer', onInboundCall);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

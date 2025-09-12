require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;
const VOICE_TO_NUMBER = process.env.VOICE_TO_NUMBER;
const port = process.env.PORT || 3000;

const Express = require('express');

const app = new Express();

const onInboundCall = (_, response) => {
  const ncco = [
    {
      action: 'connect',
      from: VONAGE_VIRTUAL_NUMBER,
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

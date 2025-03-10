require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_NUMBER = process.env.VONAGE_NUMBER;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;

const Express = require('express');

const app = new Express();
const port = process.env.PORT || 3000;

const onInboundCall = (_, response) => {
  const ncco = [
    {
      action: 'connect',
      from: VONAGE_NUMBER,
      endpoint: [
        {
          type: 'phone',
          number: VONAGE_VIRTUAL_NUMBER,
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

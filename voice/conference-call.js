require('dotenv').config({ path: __dirname + '/../.env' });

const VOICE_CONF_NAME = process.env.VOICE_CONF_NAME;
const port = process.env.PORT || 3000;

const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();
app.use(bodyParser.json());

const onInboundCall = (_, response) => {
  const ncco = [
    {
      action: 'talk',
      text: 'Please wait while we connect you to the conference',
    },
    {
      action: 'conversation',
      name: VOICE_CONF_NAME,
    },
  ];

  response.json(ncco);
};

app.get('/webhooks/answer', onInboundCall);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

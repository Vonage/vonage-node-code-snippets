require('dotenv').config({ path: __dirname + '/../.env' });
const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

const VOICE_CONF_NAME = process.env.VOICE_CONF_NAME;

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

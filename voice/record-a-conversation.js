require('dotenv').config({ path: __dirname + '/../.env' });

const VOICE_CONF_NAME = process.env.CONF_NAME;
const port = process.env.PORT || 3000;

const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();
app.use(bodyParser.json());

const onInboundCall = (request, response) => {
  const ncco = [
    {
      'action': 'conversation',
      'name': VOICE_CONF_NAME,
      'record': 'true',
      'eventMethod': 'POST',
      'eventUrl': [`${request.protocol}://${request.get('host')}/webhooks/recordings`],
    },
  ];

  response.json(ncco);
};

const onRecording = (request, response) => {
  const recording_url = request.body?.recording_url;
  console.log(`Recording URL = ${recording_url}`);

  response.status(204).send();
};

app
  .get('/webhooks/answer', onInboundCall)
  .post('/webhooks/recordings', onRecording);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

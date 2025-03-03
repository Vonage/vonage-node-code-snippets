require('dotenv').config({ path: __dirname + '/../.env' });
const Express = require('express');
const bodyParser = require('body-parser');

const VOICE_TO_NUMBER = process.env.VOICE_TO_NUMBER;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;
const port = process.env.PORT || 3000;

const app = new Express();
app.use(bodyParser.json());

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'record',
      eventUrl: [`${request.protocol}://${request.get('host')}/webhooks/recordings`],
    },
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

const onRecording = (request, response) => {
  const recording_url = request.body.recording_url;
  console.log(`Recording URL = ${recording_url}`);

  response.status(204).send();
};

app
  .get('/webhooks/answer', onInboundCall)
  .post('/webhooks/recordings', onRecording);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

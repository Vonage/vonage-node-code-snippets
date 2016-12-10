/* Voice Tutorial 2: Receiving calls to your Nexmo number
   To receive incoming calls, you need to set the webhooks.
   You need to create or update an existing Application wuth the webhook endpoints:
   1) Answer URL (e.g. https://97855482.ngrok.io/answer)
   2) Event URL (e.g. https://97855482.ngrok.io/event)
   Also use the Application ID and the event webhook to assiciate with your
   virtual number at https://dashboard.nexmo.com/your-numbers.

   API Referene: https://docs.nexmo.com/voice/voice-api/api-reference
 */

'use strict';

require('dotenv').config({path: __dirname + '/../.env'});

const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 4001, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

app.get('/answer', function (req, res) {
  let from = req.query.from;
  let to = req.query.to;

  const ncco = [
    {
      action: 'talk',
      voiceName: 'Jennifer',
      text: 'Hello, thank you for calling. This is Jennifer from Nexmo. Ciao.'
    }
  ];

  res.json(ncco);
});

app.post('/event', function (req, res) {
  console.log(req.body);
  res.status(204).end();
});

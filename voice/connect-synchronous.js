require('dotenv').config({ path: __dirname + '/../.env' });
const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const VONAGE_FROM_NUMBER = process.env.VONAGE_FROM_NUMBER;
const VONAGE_TO_NUMBER = process.env.VONAGE_TO_NUMBER;
const VONAGE_ALT_NUMBER = process.env.VONAGE_ALT_NUMBER;

app.get('/answer', (req, res) => {
  const serverHost = req.protocol + '://' + req.host;

  const ncco = [
    {
      action: 'connect',
      from: VONAGE_FROM_NUMBER,
      timeout: 5,
      eventType: 'synchronous',
      eventUrl: [`${serverHost}/connect-event`],
      endpoint: [
        {
          type: 'phone',
          number: VONAGE_ALT_NUMBER,
        },
      ],
    },
  ];

  console.log('Returning NCCO');
  console.dir(ncco);

  res.json(ncco);

});

app.post('/connect-event', (req, res) => {
  const ncco = [];

  if(req.body.status === 'timeout') {
    ncco.push({
      action: 'connect',
      from: VONAGE_FROM_NUMBER,
      endpoint: [
        {
          type: 'phone',
          number: VONAGE_TO_NUMBER,
        },
      ],
    });
  }

  res.json(ncco);
});

app.post('/events', function(req, res) {
  console.log(req.body);
  res.status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

require('dotenv').config({ path: __dirname + '/../.env' });
const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const onInboundCall = (request, response) => {
  const ncco = [
    {
      action: 'talk',
      text: 'Please enter a digit',
    },
    {
      action: 'input',
      type: ['dtmf'],
      eventUrl: [`${request.protocol}://${request.get('host')}/webhooks/dtmf`],
    },
  ];

  response.json(ncco);
};

const onInput = (request, response) => {
  const dtmf = request.body.dtmf;

  const ncco = [
    {
      action: 'talk',
      text: `You pressed ${dtmf}`,
    },
  ];

  response.json(ncco);
};

app
  .get('/webhooks/answer', onInboundCall)
  .post('/webhooks/dtmf', onInput);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

require('dotenv').config({ path: __dirname + '/../.env' });

const port = process.env.PORT || 3000;

const Express = require('express');

const app = new Express();

const onInboundCall = (request, response) => {
  const from = request.query.from;
  const fromSplitIntoCharacters = from.split('').join(' ');

  const ncco = [
    {
      action: 'talk',
      text: `Thank you for calling from ${fromSplitIntoCharacters}`,
    },
  ];

  response.json(ncco);
};

app.get('/webhooks/answer', onInboundCall);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

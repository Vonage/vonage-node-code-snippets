const Express = require('express');

const app = new Express();
const port = process.env.PORT || 3000;

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

require('dotenv').config({ path: __dirname + '/../.env' });

const port = process.env.PORT || 3000;

const Express = require('express');
const bodyParser = require('body-parser');

const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/webhook/answer', (_, res) => {
  // At this point you build an NCCO that fulfills your use case.
  // For the purposes of an example we'll just read out some text.
  const ncco = [
    {
      action: 'talk',
      text: 'Hello from Vonage!',
    },
  ];

  res.json(ncco);
  res.status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


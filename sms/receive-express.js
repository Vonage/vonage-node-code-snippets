const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const handleInboundSms = (request, response) => {
  const params = Object.assign(request.query, request.body);
  console.log(params);
  response.status(204).send();
};
app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms);

app.listen(process.env.PORT || 3000);

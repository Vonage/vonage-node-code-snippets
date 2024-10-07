const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const handleDeliveryReceipt = (request, response) => {
  const params = Object.assign(request.query, request.body);
  console.log(params);
  response.status(204).send();
};

app
  .route('/webhooks/delivery-receipt')
  .get(handleDeliveryReceipt)
  .post(handleDeliveryReceipt);

app.listen(process.env.PORT || 3000);

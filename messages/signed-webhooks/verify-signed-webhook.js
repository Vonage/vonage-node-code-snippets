require('dotenv').config({ path: __dirname + '/../../.env' });
const { verifySignature } = require('@vonage/jwt');
const { readFileSync } = require('fs');

const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + "/../../" + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;


const privateKey = readFileSync(VONAGE_APPLICATION_PRIVATE_KEY_PATH);

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app
  .route('/webhooks/inbound-message')
  .post(handleInboundMessage);

function handleInboundMessage(request, response){
  const token = request.headers.authorization.split(" ")[1];
  if (verifySignature(token, privateKey)) {
    console.log("Valid signature");
  } else {
    console.log("Invalid signature");
  }
}

app.listen(process.env.PORT || 3000);

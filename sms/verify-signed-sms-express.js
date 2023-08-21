require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_API_SIGNATURE_SECRET = process.env.VONAGE_API_SIGNATURE_SECRET;

const { Vonage } = require('@vonage/server-sdk');

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms);

function handleInboundSms(request, response) {
  const params = Object.assign(request.query, request.body);
  const { sig } = params;

  if (Vonage.sms.verifySignature(
    sig,
    params,
    VONAGE_API_SIGNATURE_SECRET, 
    "md5hash", // one of md5hash, md5, sha1, sha256, or sha512 
  ) === params.sig) {
    console.log("Valid signature");
  } else {
    console.log("Invalid signature");
  }

  response.status(204).send();
}

app.listen(process.env.PORT || 3000);

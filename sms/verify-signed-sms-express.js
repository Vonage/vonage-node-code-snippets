require('dotenv').config({ path: __dirname + '/../.env' })

const NEXMO_API_SIGNATURE_SECRET = process.env.NEXMO_API_SIGNATURE_SECRET

const Nexmo = require('nexmo')

const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms)

function handleInboundSms(request, response) {
  const params = Object.assign(request.query, request.body)

  if (Nexmo.generateSignature("md5hash", NEXMO_API_SIGNATURE_SECRET, params) === params.sig) {
    console.log("Valid signature");
  } else {
    console.log("Invalid signature");
  }

  response.status(204).send()
}

app.listen(process.env.PORT || 3000)

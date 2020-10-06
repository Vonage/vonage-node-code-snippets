require('dotenv').config({ path: __dirname + '/../.env' })

const VONAGE_API_SIGNATURE_SECRET = process.env.VONAGE_API_SIGNATURE_SECRET

const Vonage = require('@vonage/server-sdk')

const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms)

function handleInboundSms(request, response) {
  const params = Object.assign(request.query, request.body)

  if (Vonage.generateSignature("md5hash", VONAGE_API_SIGNATURE_SECRET, params) === params.sig) {
    console.log("Valid signature");
  } else {
    console.log("Invalid signature");
  }

  response.status(204).send()
}

app.listen(process.env.PORT || 3000)

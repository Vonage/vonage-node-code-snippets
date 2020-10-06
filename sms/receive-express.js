const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms)

function handleInboundSms(request, response) {
  const params = Object.assign(request.query, request.body)
  console.log(params)
  response.status(204).send()
}

app.listen(process.env.PORT || 3000)

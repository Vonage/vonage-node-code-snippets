const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app
  .route('/webhooks/delivery-receipt')
  .get(handleDeliveryReceipt)
  .post(handleDeliveryReceipt)

function handleDeliveryReceipt(request, response) {
  const params = Object.assign(request.query, request.body)
  console.log(params)
  response.status(204).send()
}

app.listen(process.env.PORT || 3000)

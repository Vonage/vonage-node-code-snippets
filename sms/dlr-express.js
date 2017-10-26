const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

app
  .route('/delivery-receipt')
  .get((request, response) => handleDeliveryReceipt(request.query, response))
  .post((request, response) => handleDeliveryReceipt(request.body, response))

function handleDeliveryReceipt(params, response) {
  console.log(params)
  response.sendStatus(200)
}

app.listen(port, () => {
  console.log(`Express server listening on port ${port} in ${app.settings.env} mode`)
})

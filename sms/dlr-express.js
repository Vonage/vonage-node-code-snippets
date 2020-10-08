// imports
const app = require('express')()  // express app
const bodyParser = require('body-parser') // creates 'body' property for response objects.

// including everything in our app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* set up route handling for GET and POST requests
*  using handleDeliveryReceipt function described lower.
*  https://www.geeksforgeeks.org/express-js-app-route-function/
*/
app
  .route('/webhooks/delivery-receipt') // specify endpoint
  .get(handleDeliveryReceipt) // GET request
  .post(handleDeliveryReceipt) // POST request

function handleDeliveryReceipt(request, response) {
  /*
  *  Merge request.query with request.body object
  *  and assign the result to params variable
  */
  const params = Object.assign(request.query, request.body)
  console.log(params)
  // since nothing is returned, send 204 code and use end() method
  // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
  response.status(204).end()
}
// uses env variable or defaults to 3000 if not specified
app.listen(process.env.PORT || 3000)

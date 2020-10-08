/* import dotenv library and tell it where the .env file is stored
*  (where you keep confidential info like API keys)
*/
require('dotenv').config({ path: __dirname + '/../.env' })

/* get 'secret' values from your .env file.
* Keep them safe from others, or you are in trouble!
* For more information:
* https://softwareengineering.stackexchange.com/questions/395128/why-must-api-keys-be-kept-private
*/
const VONAGE_API_SIGNATURE_SECRET = process.env.VONAGE_API_SIGNATURE_SECRET

// import Vonage
const Vonage = require('@vonage/server-sdk')

// other imports
const app = require('express')()
const bodyParser = require('body-parser')

// use imports in our app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

/* set up route handling for GET and POST requests
*  using handleDeliveryReceipt function described lower.
*  https://www.geeksforgeeks.org/express-js-app-route-function/
*/
app
  .route('/webhooks/inbound-sms') // specify endpoint
  .get(handleInboundSms) // GET request
  .post(handleInboundSms) // POST request

function handleInboundSms(request, response) {
  /*
  *  Merge request.query with request.body object
  *  and assign the result to params variable
  */
  const params = Object.assign(request.query, request.body)
  /*
  * Verify signature (in other words,
  * whether the message was modified midway)
  * by checking whether hashes are equal
  */
  if (Vonage.generateSignature("md5hash", VONAGE_API_SIGNATURE_SECRET, params) === params.sig) {
    console.log("Valid signature");
  } else {
    console.log("Invalid signature");
  }
  // since nothing is returned, send 204 code and use end() method
  // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
  response.status(204).end()
}

app.listen(process.env.PORT || 3000) // uses env variable or defaults to 3000 if not specified

require('dotenv').config({ path: __dirname + '/../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_NUMBER = process.env.VONAGE_NUMBER
const COUNTRY_CODE = process.env.COUNTRY_CODE

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage(
  {
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET
  },
  {
    debug: true
  }
)

vonage.number.buy(COUNTRY_CODE, VONAGE_NUMBER, (err, res) => {
  if (err) {
    console.error(err)
  }
  else {
    console.log(JSON.stringify(res, null, 2))
  }
})

require('dotenv').config({path: __dirname + '/../.env'})

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEXMO_NUMBER = process.env.NEXMO_NUMBER
const COUNTRY_CODE = process.env.COUNTRY_CODE

const Nexmo = require('nexmo')

const nexmo = new Nexmo(
  {
    apiKey: NEXMO_API_KEY,
    apiSecret: NEXMO_API_SECRET
  },
  {
    debug: true
  }
)

nexmo.number.cancel(COUNTRY_CODE, NEXMO_NUMBER, (err, res) => {
  if(err) {
    console.error(err)
  }
  else {
    console.log(JSON.stringify(res, null, 2))
  }
})

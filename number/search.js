require('dotenv').config({ path: __dirname + '/../.env' })

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const COUNTRY_CODE = process.env.COUNTRY_CODE
const NEXMO_NUMBER_TYPE = process.env.NEXMO_NUMBER_TYPE
const NEXMO_NUMBER_FEATURES = process.env.NEXMO_NUMBER_FEATURES
const NUMBER_SEARCH_CRITERIA = process.env.NUMBER_SEARCH_CRITERIA
const NUMBER_SEARCH_PATTERN = process.env.NUMBER_SEARCH_PATTERN

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

nexmo.number.search(
  COUNTRY_CODE,
  {
    type: NEXMO_NUMBER_TYPE,
    pattern: NUMBER_SEARCH_CRITERIA,
    search_pattern: NUMBER_SEARCH_PATTERN,
    features: NEXMO_NUMBER_FEATURES
  },
  (err, res) => {
    if (err) {
      console.error(err)
    }
    else {
      console.log(`Here are ${res.numbers.length} of the ${res.count} matching numbers available for purchase:`)
      res.numbers.forEach((number) => {
        console.log(`Tel: ${number.msisdn} Cost: ${number.cost}`)
      })
    }
  }
)

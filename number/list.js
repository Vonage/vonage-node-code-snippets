require('dotenv').config({ path: __dirname + '/../.env' })

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
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

nexmo.number.get(
  {
    pattern: NUMBER_SEARCH_CRITERIA,
    search_pattern: NUMBER_SEARCH_PATTERN
  },
  (err, res) => {
    if (err) {
      console.error(err)
    } else {
      console.log(`Here are ${res.numbers.length} of your ${res.count} matching numbers:`)
      res.numbers.forEach((number) => {
        console.log(`Tel: ${number.msisdn} Cost: ${number.type}`)
      })
    }
  }
)

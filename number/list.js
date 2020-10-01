require('dotenv').config({ path: `${__dirname}/../.env` })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const NUMBER_SEARCH_CRITERIA = process.env.NUMBER_SEARCH_CRITERIA
const NUMBER_SEARCH_PATTERN = process.env.NUMBER_SEARCH_PATTERN

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

vonage.number.get(
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

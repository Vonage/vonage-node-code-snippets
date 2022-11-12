require('dotenv').config({ path: __dirname + '/../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const NUMBER_SEARCH_PATTERN = process.env.NUMBER_SEARCH_PATTERN

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage(
  {
    apiKey: VONAGE_API_KEY,
    apiSecret: VONAGE_API_SECRET
  },
  {
    debug: true
  }
)

vonage.numbers.getOwnedNumbers({
    search_pattern: NUMBER_SEARCH_PATTERN,
})
    .then(resp => console.log(result))
    .catch(err => console.error(err));

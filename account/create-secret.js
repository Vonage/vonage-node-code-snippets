require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const NEW_SECRET = process.env.NEW_SECRET

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
})

vonage.secrets.createSecret(VONAGE_API_KEY, NEW_SECRET)
  .then(resp => console.log(resp))
  .catch(resp => console.error(resp.response.data));


require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_SECRET_ID = process.env.VONAGE_SECRET_ID

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
})

vonage.accounts.deleteSecret(VONAGE_API_KEY, VONAGE_SECRET_ID)
    .then(() => console.log('Secret deleted'))
    .catch(err => console.error('Error: ' + err.statusCode));


require('dotenv').config({ path: __dirname + '/../.env' })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

vonage.applications.listApplications()
  .then(resp => console.log(resp))
  .catch(err => console.err(err));
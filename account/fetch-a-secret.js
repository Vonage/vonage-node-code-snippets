require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_SECRET_ID = process.env.VONAGE_SECRET_ID

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
})

vonage.account.getSecret(VONAGE_API_KEY, VONAGE_SECRET_ID, (err, result) => {
    if (!err) {
        console.log(result.id, result.created_at);
    }
});

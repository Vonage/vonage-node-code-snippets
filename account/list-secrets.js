require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
})

vonage.account.listSecrets(VONAGE_API_KEY, (err, result) => {
    if (!err) {
        let secrets = result._embedded.secrets;

        secrets.forEach((secret) => {
            console.log(secret.id, secret.created_at);
        });

    }
});


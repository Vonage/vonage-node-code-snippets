require('dotenv').config({path: __dirname + '/../.env'})

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
})

nexmo.account.listSecrets(NEXMO_API_KEY, (err, result) => {
    if (!err) {
        let secrets = result._embedded.secrets;

        secrets.forEach((secret) => {
            console.log(secret.id, secret.created_at);
        });

    }
});


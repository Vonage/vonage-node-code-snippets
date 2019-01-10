require('dotenv').config({path: __dirname + '/../.env'})

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const SECRET_ID = "2e5751a6-8cae-4795-afda-5ef86320deef"

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
})

nexmo.account.deleteSecret(NEXMO_API_KEY, SECRET_ID, (err, result) => {
    if (err) {
        console.log("Error: " + err.statusCode);
        console.log(err.body);
    } else {
        console.log("Secret deleted");
    }
});


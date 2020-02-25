require('dotenv').config({path: __dirname + '/../.env'})

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const NEW_SECRET = process.env.NEW_SECRET


const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
})

nexmo.account.createSecret(NEXMO_API_KEY, NEW_SECRET, (err, result) => {
    if (err) {
        console.log("Error: " + err.statusCode);
        console.log(err.body);
    } else {
        console.log(result.id, result.created_at);
    }
});

require('dotenv').config({ path: __dirname + '/../.env' })
const NEXMO_API_SIGNATURE_SECRET = process.env.NEXMO_API_SIGNATURE_SECRET || ''
const jwt = require("jsonwebtoken");
const sha256 = require('js-sha256');
const app = require('express')()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app
    .route('/webhooks/inbound-message')    
    .post(handleInboundMessage);
function handleInboundMessage(request, response){
    const payload = Object.assign(request.query, request.body)
    let token = request.headers.authorization.split(" ")[1]
    try{
        var decoded = jwt.verify(token, NEXMO_API_SIGNATURE_SECRET, {algorithms:['HS256']});
        if(sha256(JSON.stringify(payload))!=decoded["payload_body"]){
            console.log("tampering detected");
            response.status(401).send();
        }
        else{
            console.log("Success");
            response.status(204).send();
        }
    }
    catch(err){
        console.log('Bad token detected')
        response.status(401).send()
    }
}
app.listen(process.env.PORT || 3000)

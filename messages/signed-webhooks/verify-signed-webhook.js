const jwt = require("jsonwebtoken")

const sha256 = require('js-sha256');
if (sha256(payload) != claims["payload_hash"]) {
 // payload has been tampered with
}

var decoded = jwt.verify(signature,'SECRET')

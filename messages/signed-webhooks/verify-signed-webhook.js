const jwt = require("jsonwebtoken")
const sha256 = require('js-sha256');

var claims = jwt.verify(signature,'SECRET')
if (sha256(payload) != claims["payload_hash"]) {
    // payload has been tampered with
   }

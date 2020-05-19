const jwt = require("jsonwebtoken")

var decoded = jwt.verify(signature,'SECRET')

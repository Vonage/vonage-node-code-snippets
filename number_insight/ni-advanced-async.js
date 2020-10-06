const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.post('/webhooks/insight', handleInsight)

function handleInsight(request, response) {
  console.log("params", Object.assign(request.query, request.body))
  response.status(204).send()
}

app.listen(3000)

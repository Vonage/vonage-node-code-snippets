const app = require('express')()

app.post('/webhooks/insight', handleInsight)

function handleInsight(request, response) {
  console.log("params", Object.assign(request.query, request.body))
  response.status(204).send()
}

app.listen(3000)

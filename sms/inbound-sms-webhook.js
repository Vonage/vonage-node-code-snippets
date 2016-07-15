require('dotenv').config({path: __dirname + '/../.env'});

var app = require('express')();
app.set('port', (process.env.PORT || 5000));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/inbound-sms-webhook', function (req, res) {
  handleWebhook(req.query, res);
});

app.post('/inbound-sms-webhook', function (req, res) {
  handleWebhook(req.body, res);
});

function handleWebhook(params, res) {
  console.log(params);
  
  var from = params['msisdn']; // the number that send the message
  var to = params['to']; // the Long Virtual Number the message was sent to
  var text = params['text'];
  var timestamp = params['message-timestamp'];
  var type = params['type']; // text, unicode or binary
  
  
  res.sendStatus(200);
}

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});

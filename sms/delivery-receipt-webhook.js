require('dotenv').config({path: __dirname + '/../.env'});

var app = require('express')();
app.set('port', (process.env.PORT || 5000));
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/delivery-receipt-webhook', function (req, res) {
  handleWebhook(req.query, res);
});

app.post('/delivery-receipt-webhook', function (req, res) {
  handleWebhook(req.body, res);
});

function handleWebhook(params, res) {
  if (!params['status'] || !params['messageId']) {
    console.log('This is not a delivery receipt');
  }
  else {
    //This is a DLR, check that your message has been delivered correctly
    if (params['status'] !== 'delivered')
    {
      console.log("Fail:", params['status'], ": ", params['err-code']);
    }
    else {
      console.log("Success");
      /*
       * The following parameters in the delivery receipt should match the ones
       * in your request:
       * Request - from, dlr - to\n
       * Response - message-id, dlr - messageId\n
       * Request - to, Responese - to, dlr - msisdn\n
       * Request - client-ref, dlr - client-ref\n
       */
    }
  }
  res.sendStatus(200);
}

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});

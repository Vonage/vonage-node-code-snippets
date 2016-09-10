require('dotenv').config({path: __dirname + '/../.env'});

function createApp() {
  var Nexmo = require('nexmo');
  var nexmo = new Nexmo({apiKey: process.env.NEXMO_API_KEY, apiSecret: process.env.NEXMO_API_SECRET});

  nexmo.app.create('First Voice App', 'voice', 'http://example.com/answer', 'http://example.com/event', {}, function(err, res) {
    var appId = res.id;
    var privateKey = res.keys.private_key;
    
    var privateKeyFile = __dirname + '/' + appId;
    require('fs').writeFileSync(privateKeyFile, privateKey);
    console.log('Private key written to', privateKeyFile)
    
    makeCall(privateKeyFile);
  });
}

function makeCall(PRIVATE_KEY_FILE) {  
  var Nexmo = require('nexmo');

  var privateKey = require('fs').readFileSync(PRIVATE_KEY_FILE);
  var appId = require('path').basename(PRIVATE_KEY_FILE);

  var nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET,
    applicationId: appId,
    privateKey: privateKey
  });
  
  nexmo.calls.create({
    to: [{
      type: 'phone',
      number: process.env.EXAMPLE_TO_NUMBER
    }],
    from: {
      type: 'phone',
      number: process.env.EXAMPLE_FROM_NUMBER
    },
    answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
  }, function(err, res) {
    if(err) { console.error(err); }
    else { console.log(res); }
  });
}

createApp();

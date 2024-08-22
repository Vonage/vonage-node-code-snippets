# Vonage APIs Quickstart Examples for Node.JS

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px"/>

Quickstarts also available for:
[Python](https://github.com/Vonage/vonage-python-code-snippets),
[.NET](https://github.com/Vonage/vonage-dotnet-code-snippets),
[Node.js](https://github.com/Vonage/vonage-node-code-snippets),
[PHP](https://github.com/Vonage/vonage-php-code-snippets),
[Ruby](https://github.com/Vonage/vonage-ruby-code-snippets) and
[cURL](https://github.com/Vonage/vonage-curl-code-snippets).

These code samples are meant to be used for
[https://developer.nexmo.com/](https://developer.nexmo.com/), and are
structured in such a way as to be used for internal testing. Developers are
free to use these code snippets as a reference, but these may require changes
to be worked into your specific application. We recommend checking out the
[Vonage API Developer Website](https://developer.nexmo.com/), which displays
these code snippets in a more copy/paste fashion.

## Configure with Your Vonage API Keys

If you'd still like to use this sample you will first need a
[Vonage account](https://dashboard.nexmo.com/sign-up). Once you have your own
API credentials, rename the `.env-example` file to `.env` and set the values
as required.

For some of the examples, you will need to
[buy a number](https://dashboard.nexmo.com/buy-numbers).

## Tutorials & Sample Code

### SMS

| Tutorial                                                                                                                                                                                 | Code Sample                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| [How to Send SMS Messages with Node.js and Express](https://www.nexmo.com/blog/2016/10/19/how-to-send-sms-messages-with-node-js-and-express-dr/)                                         | [send-express.js](sms/send-express.js)       |
| [How to Receive SMS Messages with Node.js and Express](https://www.nexmo.com/blog/2016/10/27/receive-sms-messages-node-js-express-dr/)                                                   | [receive-express.js](sms/receive-express.js) |
| [How to receive an SMS Delivery Receipt from a Mobile Carrier with Node.js](https://www.nexmo.com/blog/2016/11/23/getting-a-sms-delivery-receipt-from-a-mobile-carrier-with-node-js-dr/) | [dlr-express.js](sms/dlr-express.js)         |

### Voice

| Tutorial                                                                                                                                                 | Code Sample                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| [How to Make an Outbound Text-to-Speech Phone Call with Node.js](https://www.nexmo.com/blog/2017/01/12/make-outbound-text-speech-phone-call-node-js-dr/) | [make-calls.js](voice/make-call.js)                                                                       |
| [How to Handle Inbound Phone Calls with Node.js](https://www.nexmo.com/blog/2017/01/26/handle-inbound-text-speech-phone-call-node-js-dr/)                | [receive-call-webhook.js](voice/receive-call-webhook.js)                                                  |
| How to Direct Inbound Phone Calls to an Endpoint with Failover with Node.js                                                                              | [receive-call-webhook-failover.js](voice/receive-call-webhook-failover.js)                                |
| [How to Record Audio from Incoming Calls with Node.js](https://www.nexmo.com/blog/2017/02/06/how-to-record-audio-from-phone-call-node-js-dr/)            | [record-call.js](voice/record-call.js)                                                                    |
| [How to Make a Private Phone Call with Node.js](https://www.nexmo.com/blog/2017/03/21/make-private-phone-call-node-js-dr/)                               | [proxy-call.js](https://github.com/nexmo-community/nexmo-node-quickstart/blob/master/voice/proxy-call.js) |

### Verify

| Tutorial                                                                                                                        | Code Sample                                                                                                                                                                                   |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Two-Factor Authentication](https://www.nexmo.com/blog/2017/04/11/implement-two-factor-authentication-2fa-web-apps-node-js-dr/) | [2fa.js](https://github.com/nexmo-community/nexmo-node-quickstart/blob/master/verify/2fa.js) and [UI code](https://github.com/nexmo-community/nexmo-node-quickstart/tree/master/verify/views) |

## Request More Examples

[raise an issue](/../../issues/) if there is a an issue with the code.

If you want to know how to do something specific with the Vonage APIs,
Please [ask a question](https://github.com/Vonage/vonage-node-sdk/issues) in
the Node SDK repo.

## Licenses

- The code samples in this repo are under [MIT](LICENSE)

- The tutorials contents are under Creative Commons, [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode)

  ​

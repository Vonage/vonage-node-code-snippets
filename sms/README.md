# Getting Started with Vonage SMS APIs with Node.js

## Set up the ENV with Your Vonage API Keys

To use this sample you will first need a [Vonage account](https://dashboard.nexmo.com/sign-up). Once you have your own API credentials, rename
the `.env-example` file to `.env` and set the values as required.

You also need to [buy a number](https://dashboard.nexmo.com/buy-numbers) where you can send and receive SMS messages.

## Run the Examples

Run a node script from terminal:

```bash
$ node you_dir/send.js
```

To run "send" examples, just set up your ENV and run locally.

To run "receive" examples, you need to run the webhook file on a server, or tunnel from your local server using the services like [ngrok](https://ngrok.com/). See the tutorials for more details.

### Webhooks

These simple examples will receive webhooks and output information to the console so you can see the data that was received.

For incoming SMSes, configure your webhook to point to `/webhooks/incoming-sms`.

To receive delivery receipts (DLRs), configure your webhook to point to `/webhooks/delivery-receipt`.
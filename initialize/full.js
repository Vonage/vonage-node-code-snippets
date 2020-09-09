const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

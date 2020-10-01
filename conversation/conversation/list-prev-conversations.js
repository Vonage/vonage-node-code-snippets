require('dotenv').config({ path: `${__dirname}/../../.env` })

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = `${__dirname}/../../${process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH}`

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.conversations.get({}, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        vonage.conversations.next(result, (error, result) => {
            if (error) {
              console.error(error);
            } else {
              vonage.conversations.prev(result, (error, result) => {
                  if (error) {
                    console.error(error);
                  } else {
                    console.log(result._embedded.data.conversations);
                  });
            });
        }
      });

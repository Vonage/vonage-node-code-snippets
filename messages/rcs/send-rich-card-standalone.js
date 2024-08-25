require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;

const TO_NUMBER = process.env.TO_NUMBER;
const RCS_SENDER_ID = process.env.RCS_SENDER_ID;

const { Vonage } = require('@vonage/server-sdk');
const { RCSCustom } = require('@vonage/messages');
const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

vonage.messages.send(
  new RCSCustom({
    custom: {
      contentMessage: {
        richCard: {
          standaloneCard: {
            thumbnailImageAlignment: "RIGHT",
            cardOrientation: "VERTICAL",
            cardContent: {
              title: "Quick question",
              description: "Do you like this picture?",
              media: {
                height: "TALL",
                contentInfo: {
                  fileUrl: "'$IMAGE_URL'",
                  forceRefresh: "false",
                },
              },
              suggestions: [
                {
                  reply: {
                    text: "Yes",
                    postbackData: "suggestion_1",
                  },
                },
                {
                  reply: {
                    text: "I love it!",
                    postbackData: "suggestion_2",
                  },
                },
              ],
            },
          },
        },
      },
    },
    to: TO_NUMBER,
    from: RCS_SENDER_ID,
  }),
)
  .then(resp => console.log(resp.messageUUID))
  .catch(err => console.error(err));

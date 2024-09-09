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
          carouselCard: {
            cardWidth: "MEDIUM",
            cardContents: [
              {
                title: "Option 1: Photo",
                description: "Do you prefer this photo?",
                suggestions: [
                  {
                    reply: {
                      text: "Option 1",
                      postbackData: "card_1",
                    },
                  },
                ],
                media: {
                  height: "MEDIUM",
                  contentInfo: {
                    fileUrl: "'$IMAGE_URL'",
                    forceRefresh: "false",
                  },
                },
              },
              {
                title: "Option 2: Video",
                description: "Or this video?",
                suggestions: [
                  {
                    reply: {
                      text: "Option 2",
                      postbackData: "card_2",
                    },
                  },
                ],
                media: {
                  height: "MEDIUM",
                  contentInfo: {
                    fileUrl: "'$VIDEO_URL'",
                    forceRefresh: "false",
                  },
                },
              },
            ],
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

require('dotenv').config({ path: __dirname + '/../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VOICE_TO_NUMBER = process.env.VOICE_TO_NUMBER;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;
const VOICE_EVENT_URL = process.env.VOICE_EVENT_URL;
const port = process.env.PORT || 3000;

const express = require('express');
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_PRIVATE_KEY,
});

const app = express();
app.use(express.json());

// Machine detection results arrive with status `human` or `machine`; call
// screener and beep events are reported in `sub_state`
app.post('/webhooks/events', (request, response) => {
  const event = request.body ?? {};
  console.log(event);

  if (event.status === 'machine' && event.sub_state === 'prompt_end') {
    // The call screener finished its prompt and is waiting for the caller
    // to introduce themselves
    console.log(`Call screener detected on call ${event.call_uuid}`);

    // Returning a new NCCO replaces the one currently running on the call
    response.json([
      {
        action: 'talk',
        text: 'Hello, this is a call regarding your recent enquiry.',
        loop: 3,
      },
    ]);
    return;
  } else if (event.status === 'machine' && event.sub_state === 'prompt_end_timeout') {
    // No prompt end was detected within 10 seconds of the machine event.
    // This could be a call screener, voicemail, or another automated service
    console.log(`Prompt end timeout on call ${event.call_uuid}`);
  }

  response.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  vonage.voice.createOutboundCall({
    to: [
      {
        type: 'phone',
        number: VOICE_TO_NUMBER,
      },
    ],
    from: {
      type: 'phone',
      number: VONAGE_VIRTUAL_NUMBER,
    },
    // Placeholder to keep the line open while machine detection runs. The
    // event webhook replaces this NCCO once a call screener is detected
    ncco: [
      {
        action: 'wait',
        timeout: 60,
      },
    ],
    // VOICE_EVENT_URL must point at the POST /webhooks/events route above
    eventUrl: [VOICE_EVENT_URL],
    advancedMachineDetection: {
      behavior: 'continue',
      mode: 'default',
      beepTimeout: 30,
      callScreener: true,
    },
  })
    .then(() => console.log('Call started...'))
    .catch((error) => console.error(error));
});

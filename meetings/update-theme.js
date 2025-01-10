require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;
const THEME_ID = process.env.THEME_ID;

const { Auth } = require('@vonage/auth');
const { Meetings } = require('@vonage/meetings');

const credentials = new Auth({
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
  applicationId: VONAGE_APPLICATION_ID,
});

const meetingsClient = new Meetings(credentials);

const run = async () => {
  try {
    const theme = await meetingsClient.getTheme(THEME_ID);
    theme.mainColor = '#c0ffee';
    theme.brand = 'Brand';
    await meetingsClient.updateTheme(THEME_ID, theme);
  } catch (error) {
    console.error(error);
  }
};

run();

require('dotenv').config({ path: __dirname + '/../.env' });
const { Audit } = require('@vonage/audit');

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const SEARCH_TEXT = process.env.SEARCH_TEXT;
const DATE_FROM = process.env.DATE_FROM;
const DATE_TO = process.env.DATE_TO;

const auditClient = new Audit({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
});

const run = async () => {
  const filter = {
    dateFrom: DATE_FROM,
    dateTo: DATE_TO,
    searchText: SEARCH_TEXT,
  };

  try {
    for await (const event of auditClient.getEvents(filter)) {
      console.log(event);
    }
  } catch (error) {
    console.log(error);
  }
};
run();

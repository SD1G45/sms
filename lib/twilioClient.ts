const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const testAccountSid = process.env.TEST_TWILIO_ACCOUNT_SID;
const testAuthToken = process.env.TEST_TWILIO_AUTH_TOKEN;

var client;

if (process.env.NODE_ENV !== 'test') {
  client = require("twilio")(accountSid, authToken);
} else {
  client = require("twilio")(testAccountSid, testAuthToken);
}

export default client;

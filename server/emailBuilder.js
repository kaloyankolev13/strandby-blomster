require('dotenv').config({ path: './.env' });

const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =
  process.env.SEND_IN_BLUE_KEY;

let email = (bodyMessage) =>
  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      subject: 'Hello from the Node SDK!',
      sender: {
        email: 'no-reply@strandbyblomster.dk',
        name: 'Strandby Blomster',
      },
      to: [{ name: 'John Doe', email: 'dakuzut@getairmail.com' }],
      htmlContent:
        '<html><body style="background-color:white"><h1 style="color:red">This is a transactional email {{params.bodyMessage}}</h1></body></html>',
      params: { bodyMessage: bodyMessage },
    })
    .then(
      function (data) {
        console.log(data);
      },
      function (error) {
        console.error(error);
      }
    );

module.exports = email;

require('dotenv').config({ path: './.env' });

const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SEND_IN_BLUE_KEY;

let email = () => new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
  {
    'subject':'Hello from the Node SDK!',
    'sender' : {'email':'bulgarian_legacy@abv.bg', 'name':'Bulgarian Legacy'},
    'to' : [{'name': 'John Doe', 'email':'kaloyan.kolev@hotmail.com'}],
    'htmlContent' : '<html><body><h1 style="color:red">This is a transactional email {{params.bodyMessage}}</h1></body></html>',
    'params' : {'bodyMessage':'Made just for you!'}
  }
).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});

module.exports = email;
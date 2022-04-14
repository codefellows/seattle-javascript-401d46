'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2'}); // add credentials here.

const message = process.argv[2]; // whatever I typed after sender.js

const sns = new AWS.SNS();

// in order to publish, we need the topic
const topic = 'arn:aws:sns:us-west-2:275199309843:message'; // arn for the topic from AWS

// these payload properties are required parameters for the sns publish method.
const payload = {
  Message: message, // the properties are case sensitive.
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });



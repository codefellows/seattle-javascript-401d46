'use strict';

const { Consumer } = require('sqs-consumer');
const { Producer } = require('sqs-producer');
const Chance = require('chance');
const chance = new Chance();

const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/275199309843/delivered.fifo',
  region: 'us-west-2',
});

async function confirmDelivery(message) {

  let messageString = JSON.stringify(message);

  const payload = {
    id: chance.guid(),
    body: messageString,
    groupId: 'sqs-consumer',
    deduplicationId: `sqs-consumer1234567`,
  };

  try {
    let response = await producer.send(payload);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/275199309843/messages',
  handleMessage: confirmDelivery,
});

app.on('error', (err) => {
  console.log('SQS CONSUMER ERROR');
  console.log(err);
});

app.start();

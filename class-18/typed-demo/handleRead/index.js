const dynamoose = require('dynamoose');
// to be continued

// what table are we reference?
const friendSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

const friendModel = dynamoose.model('friends', friendSchema);

// create our schema

exports.handler = async (event) => {
  console.log(event.pathParameters, event.queryStringParameters);

  let response = { statusCode: null, body: null };

  try {
    // perform the CRUD using our specified schema.

    let friendRecords = await friendModel.scan().exec();
    console.log(friendRecords);
    response.statusCode = 200;
    response.body = JSON.stringify(friendRecords);
  } catch(e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('couldnt read from friends'));
  }

  return response;
};

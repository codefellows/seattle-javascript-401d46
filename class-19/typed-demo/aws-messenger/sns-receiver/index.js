exports.handler = async (event) => {
  // TODO implement
  console.log(event.Records[0].Sns);

  const response = {
    statusCode: 200,
    body: JSON.stringify(event.Records[0].Sns.Message),
  };
  return response;
};

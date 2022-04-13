const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    // TODO implement
    console.log(event.Records[0]); // logs our bucket upload event
    
    let Bucket = event.Records[0].s3.bucket.name;
    let fileName = event.Records[0].s3.object.key;
    let fileSize = event.Records[0].s3.object.size;
    let jsonKey = 'images.json';
    
    const imageData = {
        name: fileName,
        size: fileSize,
        type: 'image'
    }
    
    // download by images.json
    try {
        
        let object = await s3.getObject({ Bucket, Key: jsonKey }).promise();    
        
        const manifestData = JSON.parse(object.Body.toString()); // [ {} ]
        
        manifestData.push(imageData); // update the in memory array.
        
        let paramBody = JSON.stringify(manifestData); // turn our object into a string.
        
        const newManifest = await s3.putObject({
            Bucket,
            Key: jsonKey,
            Body: paramBody, // there are some requirements here.
            ContentType: 'application/json'
        }).promise();
        
        console.log(manifestBody);
        
    } catch (e) {
        console.log(e); // no specified
        if (e.message === 'The specified key does not exist.') {
            
            console.log('need to Create our image.json');
            
            let newManifest = [imageData];
            let paramBody = JSON.stringify(newManifest);
            
            let manifest = await s3.putObject({
                Bucket,
                Key: jsonKey,
                Body: paramBody, // there are some requirements here.
                ContentType: 'application/json'
            }).promise();
            
            console.log(manifest);
            
        } else {
            
            console.log('Error downloading json');
            
        }
    }
    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

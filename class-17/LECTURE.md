# Class 17: s3 and Lambda

## Warm Up

* Prompt:

## Review

EC2 and Elastic Beanstalk

Deploying CAPs to elastic Beanstalk

* Cloudwatch (logging service)
* Checking logs from the environment (nothing useful)
* Is our server deployed using https / http protocol.

Configuring elastic beanstalk feels awkward (Using the dashboard / and command line tools).

* There is a lot things to consider / AWS is always changing these forms and screens.

Error on deploy: zipping files incorrectly gives weird errors.

* All the files should represent the what the project root should look like.
* Bad errors from AWS.

## Serverless Architecture

Serverless => a lot more servers.  No more big monolithic servers that handle all the things, but smaller servers that just handle a single thing.

AWS Lambda: Micro servers (functions that can be thought of as their own server).

## s3 plus lamdba

TDDish: Lambda server triggered by events

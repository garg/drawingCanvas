/*var AWS = Meteor.npmRequire('aws-sdk');

AWS.config.update({
  accessKeyId:      Meteor.settings.s3.accessKeyId,
  secretAccessKey:  Meteor.settings.s3.secretAccessKey,
  region:           Meteor.settings.s3.region,
});

S3 = new AWS.S3();


Meteor.startup(function() {

  S3.putObject({
    Bucket: Meteor.settings.s3.bucket,
    ACL: 'public-read',
    Key: 'connection-log',
    ContentType: 'text/plain',
    Body: new Buffer('' + new Date().getTime() + ' ' + moment().format('YYYY-MM-DD HH:mm:ss'), 'utf-8'),
  }, function(err, data) {
    // console.log("BU ERR", err);
    // console.log("BU DAT", data);
  });

});

*/

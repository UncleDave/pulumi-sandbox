import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const suffix = 'dkdavpri';

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket(`best-bucket-ever-${ suffix }`);

// Export the name of the bucket
export const bucketName = bucket.id;

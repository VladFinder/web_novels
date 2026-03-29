import { S3Client, PutBucketPolicyCommand, PutBucketAclCommand } from '@aws-sdk/client-s3';

const client = new S3Client({
  endpoint: 'https://s3.ru1.storage.beget.cloud',
  region: 'ru-1',
  credentials: {
    accessKeyId: 'YIHOB7YV5P5KYHAVYBZC',
    secretAccessKey: '8o2HyCOY0cp3EA3Jt4B47PbWHH7TmGigD6BHy1rm',
  },
  forcePathStyle: true,
});

const BUCKET = 'e8faaa356416-ikipoject';

// Попробуем сначала ACL
try {
  await client.send(new PutBucketAclCommand({ Bucket: BUCKET, ACL: 'public-read' }));
  console.log('✅ Bucket ACL set to public-read');
} catch (e) {
  console.log('ACL не сработал:', e.message);
}

// Потом политику
try {
  await client.send(new PutBucketPolicyCommand({
    Bucket: BUCKET,
    Policy: JSON.stringify({
      Version: '2012-10-17',
      Statement: [{
        Sid: 'PublicRead',
        Effect: 'Allow',
        Principal: '*',
        Action: 's3:GetObject',
        Resource: `arn:aws:s3:::${BUCKET}/*`,
      }],
    }),
  }));
  console.log('✅ Bucket policy set to public read');
} catch (e) {
  console.log('Policy не сработала:', e.message);
}

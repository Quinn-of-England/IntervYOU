import AWS from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'

dotenv.config()

AWS.config.update({
  region: process.env.BUCKET_REGION,
  secretAccessKey: process.env.BUCKET_SECRET_KEY,
  accessKeyId: process.env.BUCKET_ACCESS_KEY,
})

export var s3 = new AWS.S3()

export const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
            cb(null, uuidv4())
        },
    }),
}).array('files', 12)
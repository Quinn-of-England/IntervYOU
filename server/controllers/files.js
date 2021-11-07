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

var s3 = new AWS.S3()

/* *
 * * This function will upload all files to S3 bucket
 * * Pass files as form-data with key 'files'
 * * A maximum of 12 files can be uploaded
 * * A 200(OK) will be sent if files were succesfully uploaded
 * * A 422(Unprocessable Entity) will be sent if files cant be uploaded
 */
export const upload_file = async (req, res) => {
  try{
      upload(req, res, (err) => {
          if(err){
              res.status(422).json({
                  message: "Unable to upload file(s)",
                  error: err.message
              })
          }else{
              res.status(200).json({
                  message: "File(s) uploaded",
                  files: req.files
              })
          }
      })
  }catch(err){
      res.status(500).json({
          message: "Server error while uploading file(s)",
          error: err.message
      })
  }
}

/* *
 * * This function will download an image from the S3 bucket
 * * The file key is used to download the file
 * * A 200(OK) will be sent if the file was downloaded
 * * The file will be sent as bytes
 * * A 400(Bad request) will be sent if file cant be downloaded
 * Path parameters:
 *  key
 */
export const download_file = async (req, res) => {
    try{
        s3.getObject({
            Bucket: process.env.BUCKET_NAME,
            Key: req.params.key
        }, (err, result) => {
            if(err){
                res.status(400).json({
                    message: "Unable to download file",
                    error: err.message
                })
            }else{
                res.writeHead(200, {
                    'Content-Type': result.ContentType,
                    'Content-Length': result.ContentLength,
                    'Last-Modified': result.LastModified,
                })
                res.write(result.Body, 'binary')
                res.end(null, 'binary')
            }
        })
    }catch(err){
        res.status(500).json({
            message: 'Server error while downloading file',
            error: err.message
        })
    }
}

/* *
 * * This function will delete an image from the S3 bucket
 * * The file key is used to delete the file
 * * A 200(OK) will be sent if the file was deleted
 * * A 400(Bad request) will be sent if file cant be deleted
 * Path parameters:
 *  key
 */
export const delete_file = async (req, res) => {
    try{
        s3.deleteObject({
            Bucket: process.env.BUCKET_NAME,
            Key: req.params.key
        }, (err, result) => {
            if(err){
                res.status(400).json({
                    message: "Unable to delete file",
                    error: err.message
                })
            }else{
                res.status(200).json({
                    message: "File deleted"
                })
            }
        })
    }catch(err){
        res.status(500).json({
            message: 'Server error while deleting file',
            error: err.message
        })
    }
}

const upload = multer({
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

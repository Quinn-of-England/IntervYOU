import mongoose from 'mongoose'
import Post from '../models/Post.js'
import { upload, s3 } from '../file-upload.js'
import dotenv from 'dotenv'

dotenv.config()

/**
 * * This function will get all the posts from the database paginated
 * * A 200(Ok) will be sent after success
 * Query params: {
 *  size: max number of posts to return
 *  page: page number
 *  sortBy: type date or likes
 * }
 */
export const getAllPosts = async (req, res) => {
  try {
    const sort = {}
    if (req.query.sortBy === 'date') sort['date'] = -1
    else sort['likes'] = -1

    const options = {
      page: parseInt(req.query.page),
      limit: parseInt(req.query.size),
      sort,
    }

    const { docs, totalPages } = await Post.paginate({}, options)
    res.status(200).json({ posts: docs, totalPages: totalPages })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getPostById = async (req, res) => {
  const { id } = req.params
  console.log(id)

  try {
    const post = await Post.findById(id)
    res.status(200).json(post)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getPostsByTitle = async (req, res) => {
  try {
    const posts = await Post.find({ Post: req.body.title })
    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getPostsByDate = async (req, res) => {
  try {
    const posts = await Post.find({ Post: req.body.date })
    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

/* *
 * * This function will create a post
 * * The request must be sent using multipart/form-data since files can be uploaded
 * * The files must be passed with key "files"
 */
export const createPost = async (req, res) => {
  try {
    //Successful Creation - 201
    upload(req, res, async (err) => {
      if (err) {
        res.status(422).json({
          message: 'Unable to create post',
          error: err.message,
        })
      } else {
        let files = []
        req.files.forEach((file) => {
          const newFile = {
            key: file.key,
            name: file.originalname,
            size: formatFileSize(file.size),
            file_type: formatFileType(file.mimetype),
          }
          files.push(newFile)
        })
        req.body.files = files

        await Post.create(req.body)
        res.status(201).json({
          message: 'Post created',
        })
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const updatePost = (req, res) => {
  try {
    upload(req, res, async (err) => {
      console.log(req.body)
      if (err) {
        res.status(422).json({
          message: 'Unable to update post',
          error: err.message,
        })
      } else {
        let addedFiles = []

        // Get Files from Post By Id
        const { files } = await Post.findById(req.params.id)
        req.body.files = files

        req.files.forEach((file) => {
          const newFile = {
            key: file.key,
            name: file.originalname,
            size: formatFileSize(file.size),
            file_type: formatFileType(file.mimetype),
          }
          addedFiles.push(newFile)
        })

        // Add Newly Added Files to Post
        req.body.files.push(...addedFiles)

        if (req.body.keys && Array.isArray(req.body.keys)) {
          const deletedKeys = []
          req.body.keys.forEach((key) => {
            deletedKeys.push({ Key: key })

            // Remove File Index
            const fileIndex = req.body.files.findIndex(
              (file) => file.key === key
            )
            if (fileIndex !== -1) {
              req.body.files.splice(fileIndex, 1)
            }
          });

          s3.deleteObjects(
            {
              Bucket: process.env.BUCKET_NAME,
              Delete: { Objects: deletedKeys, Quiet: false },
            },
            (err, _) => {
              if (err) {
                res.status(400).json({
                  message: 'Could not delete files!',
                  error: err.message,
                })
              } else {
                Post.findByIdAndUpdate(
                  req.params.id,
                  req.body,
                  { new: true },
                  (err, result) => {
                    if (err) {
                      res.status(400).json({
                        message: 'Could not update post',
                        error: err.message,
                      })
                    } else {
                      res.status(200).json(result)
                    }
                  }
                );
              }
            }
          );
        } else if (req.body.keys && typeof req.body.keys === 'string') {
          // Remove File Index
          const fileIndex = req.body.files.findIndex(
            (file) => file.key === req.body.keys
          )
          if (fileIndex !== -1) {
            req.body.files.splice(fileIndex, 1);
          }
          console.log('here: ', req.body.keys)
          s3.deleteObject({
            Bucket: process.env.BUCKET_NAME,
            Key: req.body.keys,
          },
            (err, _) => {
              if (err) {
                res.status(400).json({
                  message: 'Could not delete files!',
                  error: err.message,
                })
              } else {
                Post.findByIdAndUpdate(
                  req.params.id,
                  req.body,
                  { new: true },
                  (err, result) => {
                    if (err) {
                      res.status(400).json({
                        message: 'Could not update post',
                        error: err.message,
                      })
                    } else {
                      res.status(200).json(result)
                    }
                  }
                );
              }
            }
          );
        } else {
          Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, result) => {
              if (err) {
                res.status(400).json({
                  message: 'Could not update post',
                  error: err.message,
                })
              } else {
                res.status(200).json(result)
              }
            }
          );
        }
      }
    })
  } catch (err) {
    res.status(401).json({ message: err.message })
  }
}

export const deletePost = (req, res) => {
  try {
    Post.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) {
        res.status(400).json({
          message: 'Could not delete post!',
          error: err.message,
        })
      } else {
        console.log(result)
        if (result.files.length) {
          const deletedKeys = []
          result.files.forEach((file) => {
            deletedKeys.push({ Key: file.key })
          })
          console.log(deletedKeys)

          s3.deleteObjects(
            {
              Bucket: process.env.BUCKET_NAME,
              Delete: { Objects: deletedKeys, Quiet: false },
            },
            (err, _) => {
              if (err) {
                res
                  .status(400)
                  .json({
                    message: 'Could not delete files',
                    error: err.message,
                  })
              } else {
                res.status(200).json({ message: 'Post deleted' })
              }
            }
          )
        } else {
          res.status(200).json({
            message: 'Post deleted!',
          })
        }
      }
    })
  } catch (err) {
    res.status(500).json({
      message: 'Server error while deleting post',
      error: err.message,
    })
  }
}

export const addComment = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id, 
      { $push: { comments: req.body.comment } }, 
      { new: true }
    );
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(401).json({ message: err.message })
  } 
}

export const updateVote = async (req, res) => {
  const { id } = req.params
  const { voteChange } = req.body

  try {
    const post = await Post.findById(id)
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes + voteChange },
      { new: true }
    )
    res.status(201).json(updatedPost)
  } catch (err) {
    res.status(401).json({ message: err.message })
  }
}

// Functions to Convert Post for Upload
const formatFileSize = (fileBytes) => {
  let currSizeIndex = 0
  const fileSizes = ['Bytes', 'KB', 'MB', 'GB']

  let bytes = parseInt(fileBytes)
  while (bytes > 1024) {
    bytes /= 1024
    currSizeIndex++
  }

  return Math.round(bytes) + ' ' + fileSizes[currSizeIndex]
}

const formatFileType = (fileType) => {
  switch (fileType) {
    case 'image/png':
    case 'image/jpg':
    case 'image/jpeg':
    case 'image/gif':
      return 'Image (' + getFileExtension(fileType) + ')'
    case 'audio/mp3':
      return 'Audio MP3'
    case 'video/mp4':
      return 'Video MP4'
    case 'application/pdf':
      return 'PDF Document'
    case 'application/zip':
    case 'application/rar':
      return 'Compressed Files (' + getFileExtension(fileType) + ')'
    default:
      if (fileType && fileType.includes('presentation')) {
        return 'Powerpoint Slides'
      } else if (fileType && fileType.includes('sheet')) {
        return 'Excel Spreadsheet'
      } else if (fileType && fileType.includes('word')) {
        return 'Word Document'
      } else {
        return 'Undefined File'
      }
  }
}

const getFileExtension = (fileType) =>
  fileType.slice(fileType.lastIndexOf('/') + 1, fileType.length)

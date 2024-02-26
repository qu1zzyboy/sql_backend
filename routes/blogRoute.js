const express = require('express')
const blogController = require('../controller/postController')
const router = express.Router()
router.route('/uploadBlog').post(blogController.insertBlog)
module.exports = router
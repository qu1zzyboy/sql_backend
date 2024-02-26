const db = require('../models/DB')
exports.insertBlog = async (req, res, next) => {
    const { creator, topic, title, content } = req.body
    try {
        const blog = await db.blog.create({
            creator, topic, title, content
        });
        res.status(200).json({
            status: 'success',
            message: 'createBlogsuccess'
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({
            status: 'failed',
            message: 'Failed to create a blog'
        })
    }
}
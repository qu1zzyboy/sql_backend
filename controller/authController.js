const db = require("../models/DB")
exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.user.create({
            email,
            password
        })
        res.status(200).json({
            status: 'success'
        })
    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                status: 'failed',
                message: "email has been used"
            })
            console.log(e)
        } else {
            res.status(400).json({
                status: "failed"
            })
        }
    }
}
exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const loginUser = await db.user.findOne({ where: { email: email } })
        if (!loginUser) {
            return res.status(404).json({
                status: 'failed',
                message: 'user is not found'
            })
        }
        if (password == loginUser.password) {
            res.status(200).json({
                status: 'success',
                message: "login successfully"
            })
        } else {
            res.status(400).json({
                status: 'failed',
                message: "password is wrong"
            })
        }
    } catch (e) {
        res.status(400).json({
            status: 'failed'
        })
    }
}
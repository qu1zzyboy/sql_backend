const express = require("express");
const session = require("express-session");
const { DataTypes } = require("sequelize")
const ORMDB = require("./models/DB")
const userRouter = require("./routes/userRoute")
const blogRouter = require('./routes/blogRoute')
async function connection() {
    await ORMDB.authenticate()
    console.log("Connection successfully.")
    setTimeout(connection, 5000)
}
const connectionWithRetry = () => {
    ORMDB.authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch((e) => {
            console.log(e)
            setTimeout(connectionWithRetry, 5000)
        }
        )
}
//connection()
app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("<h1>hi<h1>")
})
app.use("/api/v1/users", userRouter)
app.use("/api/v1/blogs", blogRouter)
app.listen(process.env.PORT || 3000)
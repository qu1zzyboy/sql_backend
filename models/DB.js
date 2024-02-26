const dbConfig = require('../config/db.config')
const ORM = require("sequelize")
const ORMDB = new ORM(dbConfig.MYSQL_DB, dbConfig.MYSQL_USER, dbConfig.MYSQL_PASSWORD, {
    host: dbConfig.MYSQL_IP,
    port: dbConfig.MYSQL_PORT,
    dialect: dbConfig.MYSQL_DIALECT,
    define: {
        freezeTableName: true,
        force: true
    }
});

async function connection() {
    ORMDB.authenticate()
    console.log("successfully connect to DB")
    setTimeout(connection, 5000)

}
const db = {}
db.Sequelize = ORM
db.sequelize = ORMDB

db.blog = require('./blog')(ORMDB, ORM)
db.user = require('./user')(ORMDB, ORM)
require('./relationship')(db);
module.exports = db
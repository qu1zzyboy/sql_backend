module.exports = (sequelize, Sequelize, db) => {
    const user = sequelize.define("User", {
        User_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            isEmail: {
                msg: 'Only email format allowed'
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        freezeTableName: true
    })

    user.sync({ alter: true }).then(() => {
        console.log("User Table sync successfully")
    }).catch((err) => {
        console.log("Table and model sync failed")
        console.error(err);
    })
    return user
}
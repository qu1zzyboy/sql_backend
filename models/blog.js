module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("Blog", {
        Blog_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        creator: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        topic: {
            type: Sequelize.ENUM,
            values: ['DeFi', 'NFT', 'Layer1', 'Layer2'],
            allowNull: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    })

    Blog.sync({ alter: true }).then(() => {
        console.log("Blog sync successfully")
    }).catch((err) => {
        console.log("Blog sync failed")
        console.error(err);
    })
    return Blog
}

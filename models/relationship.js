module.exports = (db) => {
    db.user.hasMany(db.blog, {
        foreignKey: {
            name: 'creator',
            allowNull: false
        },
        as: "blogs"
    })
    db.blog.belongsTo(db.user, {
        foreignKey: {
            name: "creator",
            allowNull: false
        },
        as: 'blogs'
    })
}

const relationshipCreate = (db) => {

}
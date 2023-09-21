module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        postID: {
            type: Sequelize.UUID
        },
        name: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })
    return Comment;
}
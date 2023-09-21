module.exports = (seqeuelize, Sequelize) => {
    const Post = seqeuelize.define("post", {
        postID: {
            type: Sequelize.UUID
        },
        name: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        numberOfLikes: {
            type: Sequelize.INTEGER
        },
        numberOfDislikes: {
            type: Sequelize.INTEGER
        },
        userLikedArray: {
            type: Sequelize.ARRAY(Sequelize.String)
        },
        userDislikedArray: {
            type: Sequelize.ARRAY(Sequelize.String)
        }    
    })
    return Post;
}
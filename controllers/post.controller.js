const db = require("../models");
const Post = db.posts;
const Comment = db.comments;

exports.createPost = (post) => {
    return Post.create({
        name: post.name,
        title: post.title,
        text: post.title,
        published: post.published,
        numberOfLikes: 0,
        numberOfDislikes: 0,
        // userLikedArray: [],
        // userDislikedArray: []
    })
    .then((post) => {
        console.log("Post created: " + JSON.stringify(post, null, 2))
        return post;
    })
    .catch((err) => {
        console.log("Error while creating post: " + err)
    });
}

exports.createComment = (postId, comment) => {
    return Comment.create({
        name: comment.name,
        text: comment.text,
        published: comment.published,
        postId: postId
    })
    .then((post) => {
        console.log("Comment created: " + JSON.stringify(comment, null, 2))
        return comment;
    })
    .catch((err) => {
        console.log("Error while creating comment: " + JSON.stringify(comment, null, 2))
    });
}

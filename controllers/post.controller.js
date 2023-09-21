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
        userLikedArray: [],
        userDislikedArray: []
    })
    .then((post) => {
        console.log("Post created: " + JSON.stringify(post, null, 2))
    })
    .catch((err) => {
        console.log("Error while creating post: " + JSON.stringify(post, null, 2))
    });
}
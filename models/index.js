const dbConfig = require("../config/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./post.model")(sequelize,Sequelize);
db.comments = require("./comment.model")(sequelize,Sequelize);

db.posts.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.posts, {
    foreignKey: "postId",
    as: "post"
});

module.exports = db;
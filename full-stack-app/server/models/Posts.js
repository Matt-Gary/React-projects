module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    //create accociation
    Posts.associate = (models) =>{ //models – argument that our Posts table have access to our tables 
    Posts.hasMany(models.Comments, {  //models.Comments- must be exactly the same name that we want to accosiated with
        onDelete: "cascade"}) //cascade- if I delete a post, it gonna delete every single comment related to that post
    }

    return Posts
}
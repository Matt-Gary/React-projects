module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", { //name of table in database
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    //create accociation with posts to leave likes
    // Users.associate = (models) =>{ //models – argument that our Posts table have access to our tables 
    // Users.hasMany(models.Posts, {  //models.Comments- must be exactly the same name that we want to accosiated with
    //     onDelete: "cascade"}) //cascade- if I delete a post, it gonna delete every single comment related to that post
    // }
    // //each user can posts how many times he want
    return Users
}
const express = require('express')
const router = express.Router()
const {Comments} = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId //getting ID - id should be the same as in the path :postId'
    const comments = await Comments.findAll({where: {PostId: postId}}) //using sequelizer to find our postID. 
    //Go to do Table Comments and return every single element where PostId column is the same as postId that we quering from our params
    if (comments) {
        res.json(comments);
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    });
    // create the routs that's gonna create comments
    router.post("/", validateToken, async (req, res) => { //create post req for the comment
        const comment = req.body
        await Comments.create(comment)
        res.json(comment)
    })

module.exports = router //to make sure that route will work wwe must export it
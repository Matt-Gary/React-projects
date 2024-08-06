const express = require('express')

const router = express.Router()

const {Posts} = require('../models')

router.get("/", async (req, res) => {
    const listOfPost = await Posts.findAll() //go through the table generate to SQL to select element from the table and set an equal to listOfPost variable
    res.json(listOfPost)
})

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id //getting ID - id should be the same as in the path :id
    const post = await Posts.findByPk(id) //using sequelizer function that take primary key
    if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: "Post not found" });
      }
    });


router.post("/", async (req, res) => {
    const post = req.body
    await Posts.create(post)
    res.json(post)


})

module.exports = router
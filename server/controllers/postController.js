const postSchema = require('../models/postModel');

//get post
exports.getPost = async (req, res) =>{
    // res.send('hello from get about + contr')
    const post = await postSchema.find();
    try {
        res.json(post);
    } catch (err) {
        res.status(500).json({msg: 'server problem with getting post'})
    }
}

// add post
exports.addPost = async (req, res) =>{
    // res.send('hello from get about + contr')
    const {post_id, title, description, images} = req.body;
    try {
        const newPost =  new postSchema({
            post_id,
            title,
            description,
            images
        })

        await newPost.save();
        res.json(newPost);

    } catch (err) {
        res.status(500).json({msg: 'server problem with adding post'})
    }
}
//find by id
exports.getPostId = async (req, res) =>{
    // res.send('hello from get post id + contr') test 1
    try {
        const post = await postSchema.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.status(500).json({msg: 'server problem with finding by id post'})
    }
}

//update post
exports.updatePost = async (req, res) =>{
    
    const {post} = req.body;
    try {
        const newPost = await postSchema.findByIdAndUpdate(req.params.id,{
            post
        });

        let results = await newPost.save();
        await results;
        res.json({msg: 'post was updated'})
        
    } catch (err) {
        res.status(500).json({msg: 'server problem with updating id post'})
    }
}

//delete post
exports.deletePost = async (req, res) =>{
    const post = await postSchema.findByIdAndDelete(req.params.id)

    post;
    res.json({msg: 'item deleted'})
}
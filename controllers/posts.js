const Post = require("../models/post");



module.exports = {
  create,
  index
};




function create(req, res) {
  console.log(req.file, req.body, req.user)
  // check to make sure a file was sent over

	res.json({data: 'hitting create'})



}

async function index(req, res) {
  try {
    // this populates the user when you find the posts
    // so you'll have access to the users information
    // when you fetch teh posts
    const posts = await Post.find({}).populate("user").exec();
    res.status(200).json({ posts });
  } catch (err) {
    res.json({error: err})
  }
}
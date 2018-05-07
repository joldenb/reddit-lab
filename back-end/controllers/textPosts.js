var models = require('../models');
var TextPost = models.TextPost;

function index(req, res) {
  TextPost.find({}, function(err, textPosts) {
    if (err) res.send(err);
    else res.json(textPosts);
  });
}

function create(req, res) {
	let newPostDocument = {
		title : req.body.title,
		content : req.body.content,
		thumbnail_image_url : req.body.image
	}
  TextPost.create(newPostDocument, function(err, newDocument){
  	if (err) res.send(err);
  	res.json(newDocument);
  })
}

function show(req, res) {

}

function update(req, res) {

}

function destroy(req, res) {

}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
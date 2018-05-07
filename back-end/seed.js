var db = require('./models');

let sampleTextPosts = [
	{
	  title:"look at the dog", 
	  content:"pitch a tent",
	  thumbnail_image_url:"",
	  votes:22, 
	  comments: [{
	  	content : "this is awesome",
	  	votes: 2
	  }]		
	},
	{
	  title:"take a swim", 
	  content:"swimming makes you better",
	  thumbnail_image_url:"",
	  votes:44, 
	  comments: [{
		  	content : "water is wet",
		  	votes: 3
		  },
		  {
		  	content : "swimming pools are for winners",
		  	votes: 55
		  }
	  ]		
	}
]

db.TextPost.remove()

db.TextPost.create(sampleTextPosts, function(err, newdocs){
	console.log("running seed file")
	console.log(newdocs)
})
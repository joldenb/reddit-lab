var db = require('./models');

let sampleTextPosts = [
	{
	  title:"heroku is the best", 
	  content:"pitch a tent",
	  thumbnail_image_url:"https://shop.tristarseafood.com/wp-content/uploads/Geoduck.jpg",
	  votes:22, 
	  comments: [{
	  	content : "this is awesome",
	  	votes: 2
	  }]		
	},
	{
	  title:"markers with ink", 
	  content:"swimming makes you better",
	  thumbnail_image_url:"https://cdn.drawception.com/images/panels/2013/11-16/rgFG8c8Ar9-4.png",
	  votes:44, 
	  comments: [{
		  	content : "water is wet",
		  	votes: 3
		  },
		  {
		  	content : "swimming pools are for winners",
		  	votes: 55,
		  	mustchaes : "yes please"
		  }
	  ]		
	}
]


db.TextPost.remove({}, function(err, postDeleteResults){
	console.log("number of text posts after remove  " + db.TextPost.count() ) 
	// console.log(postDeleteResults)
	db.Comment.remove({}, function(error, commentDeleteResults){
		// console.log(commentDeleteResults)
		db.TextPost.create(sampleTextPosts, function(err, newdocs){
			console.log("running seed file")
			console.log(newdocs)
		})
	})
})


import React, {Component} from 'react'
import axios from 'axios'

class TextPost extends Component {

	constructor(props){
		super(props)

		this.state = {
			posts : {
				data : []
			},
			newTitle : "",
			newContent : "",
			newImage : ""
		}

		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onTitleChange = this.onTitleChange.bind(this)
		this.onContentChange = this.onContentChange.bind(this)
		this.onThumbnailChange = this.onThumbnailChange.bind(this)
		this.axiosCallback = this.axiosCallback.bind(this)
	}


	axiosCallback(results) {
		console.log("this is " )
		console.log(this)
		let newData = this.state.posts.data
		newData.push(results.data)
		this.setState({
			newTitle : "",
			newContent : "",
			newImage : "",
			posts : {
				data : newData
			}
		})
	}

	onFormSubmit(event) {
		event.preventDefault()
		let newPost = {
			title : this.state.newTitle,
			content : this.state.newContent,
			image : this.state.newImage
		}

		axios.post("/api/posts", newPost).then(this.axiosCallback)
	}

	onTitleChange(event){
		this.setState({
			posts : this.state.posts,
			newTitle : event.target.value,
			newContent : this.state.newContent,
			newImage : this.state.newImage
		})
	}

	onContentChange(event){
		this.setState({
			posts : this.state.posts,
			newTitle : this.state.newTitle,
			newContent : event.target.value,
			newImage : this.state.newImage
		})
	}

	onThumbnailChange(event){
		this.setState({
			posts : this.state.posts,
			newTitle : this.state.newTitle,
			newContent : this.state.newContent,
			newImage : event.target.value
		})
	}

	componentDidMount(){
		axios.get("/api/posts").then((results) => {
			this.setState({
				posts : results
			})
		})
	}

	render() {

			let listOfPostTitles = this.state.posts.data.map( (postObject, index) => {
				return <li key={index}>
					<h4>{postObject.title}</h4>
					<img width="300" src={postObject.thumbnail_image_url}/>
				</li>
			})


			// add onclicks to keep track of the state of each input
			// and onsubmit for the whole form when the user clicks the button
		return (
			<div>
				<h1>List of Posts:</h1>
				<ul>{listOfPostTitles}</ul>
				<h1>Add a new one</h1>
				<form onSubmit={this.onFormSubmit}>
					<label htmlFor="toenails"> Title
						<input id="toenails" type="text" onChange={this.onTitleChange} value={this.state.newTitle}/>
					</label>
					<label htmlFor="wills-toenails"> Content
						<input id="wills-toenails" type="text" onChange={this.onContentChange}  value={this.state.newContent}/>
					</label>
					<label htmlFor="hurricanes"> Thumbnail Image
						<input id="hurricanes" type="text" onChange={this.onThumbnailChange}  value={this.state.newImage}/>
					</label>
					<button type="submit">Click ME!!!</button>
				</form>
			</div>
		)
	}
}

export default TextPost;









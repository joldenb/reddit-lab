import React, {Component} from 'react'
import axios from 'axios'

class TextPost extends Component {

	constructor(props){
		super(props)

		this.state = {
			posts : {
				data : []
			}
		}
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

		return (
			<div>
				<h1>List of Posts:</h1>
				<ul>{listOfPostTitles}</ul>
			</div>
		)
	}
}

export default TextPost;
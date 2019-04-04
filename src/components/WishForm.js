import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { savingWish } from '../actions/wishes'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { Button, Input, Form } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'

class WishForm extends React.Component {
	constructor(){
		super()

		this.state = {
			itemDescription: "",
			itemLink: "",
			itemImage: "",
			itemRank: "",
			itemPrice: ""
		}
	}

	handleChange = (event) => {
		this.setState({
			itemDescription: this.refs.description.value,
			itemLink: this.refs.link.value,
			itemPrice: this.refs.price.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.props.addWish(this.state)
		this.props.hideForm()
		this.setState({
			itemDescription: "",
			itemLink: "",
			itemImage: "",
			itemRank: "",
			itemPrice: ""
		})
	}

	handleRating = (event, rate) => {
		this.setState({
			itemRank: rate.rating
		})
		
	}



	handleDrop = files => {
  		const uploaders = files.map(file => {
    	// Initial FormData
    	const formData = new FormData();
   	 	formData.append("file", file);
   	 	formData.append("tags", `codeinfuse, medium, gist`);
    	formData.append("upload_preset", "afp2wdc2"); 
    	formData.append("api_key", "685354917793128");
    	formData.append("timestamp", (Date.now() / 1000) | 0);
   
	    return axios.post("https://api.cloudinary.com/v1_1/yuralala/image/upload", formData, {
	      headers: { "X-Requested-With": "XMLHttpRequest" },
	    }).then(response => {
	      const data = response.data;
	      const fileURL = data.secure_url // You should store this URL for future references in your app
	      console.log(data);
	      this.setState({itemImage: fileURL})
	    })
	});
	  // // Once all the files are uploaded 
	  // axios.all(uploaders).then(() => {
	  //   // ... perform after upload is successful operation
	  // });
	}


	handleClick = () => {
		this.props.hideForm()
	}

	render() {

	return (
		<div>
			<Form onSubmit={this.handleSubmit}>
				<div>Item Description <input size="mini" ref="description" type="text" onChange={this.handleChange} /></div>
				<div>Link <input size="mini" ref="link" type="text" onChange={this.handleChange} /></div>
				<div>Priority<Rating icon="heart" maxRating={5} onRate={this.handleRating} /></div>
				<div>Price $<input size="mini" ref="price" type="text" onChange={this.handleChange} /></div>
				<div>Attach an image: 
					<Dropzone className="upload-img" onDrop={this.handleDrop} multiple accept="image/*">
  					<p className="browse">Browse...</p>
					</Dropzone></div>
				<div>{this.state.itemImage.length > 0 ? <img src={this.state.itemImage} className="preview-wish-img"/> : null}</div>
				<div className="buttons">
				<Button size="medium" onClick={this.handleClick}>cancel</Button>
				<Input type="submit" value="Save to my list" />
				</div>
			</Form>
		</div>
		)

	}
}

function mapDispatchToProps(dispatch) {
	return {
		addWish: (wish) => {
			dispatch(savingWish(wish))
		}
	}
}

export default connect(null, mapDispatchToProps)(WishForm)

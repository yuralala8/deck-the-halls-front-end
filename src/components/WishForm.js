import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { savingWish } from '../actions/wishes'
import Dropzone from 'react-dropzone'
import axios from 'axios'

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
			itemRank: this.refs.rank.value,
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
			<form onSubmit={this.handleSubmit}>
				<div>Item Description <input ref="description" type="text" onChange={this.handleChange} /></div>
				<div>Link: <input ref="link" type="text" onChange={this.handleChange} /></div>
				<div>Priority: <input ref="rank" type="text" onChange={this.handleChange} /></div>
				<div>Price: <input ref="price" type="text" onChange={this.handleChange} /></div>
				<div>Attach an image: 
					<Dropzone onDrop={this.handleDrop} multiple accept="image/*">
  					<p>Drop your files or click here to upload</p>
					</Dropzone></div>
				<div>{this.state.itemImage.length > 0 ? <img src={this.state.itemImage} width="200px" height="200px"/> : null}</div>
				<input type="submit" value="Save to my list" />
				<button onClick={this.handleClick}>cancel</button>
			</form>
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
import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { sendUserInfo } from '../actions/user'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { Button, Header, Icon, Input, Form, TextArea } from 'semantic-ui-react'

class UserInfoContainer extends React.Component {
	constructor(){
		super()
		this.state = {
			profileImage: "",
			userBio: ""
		}
	}

	handleClick = () => {
		this.props.hideForm()
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.props.sendUserInput(this.state)
		this.props.hideForm()
	}

	handleChange = (event) => {
		this.setState({
			userBio: this.refs.bio.value
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
	      this.setState({profileImage: fileURL})
	    })
	});
	  // // Once all the files are uploaded 
	  // axios.all(uploaders).then(() => {
	  //   // ... perform after upload is successful operation
	  // });
	}

	

	render(){
		return(
			<div className="profile-update">
				<Form id="profile" onSubmit={this.handleSubmit}>
			
					<Header icon='id card outline' content='Update Profile'/>
					<div className="content"> Upload Profile Image: 
						<Dropzone className="upload-img" onDrop={this.handleDrop} multiple accept="image/*">
	  						<p className="browse"><a href="#">Browse...</a></p>
						</Dropzone></div>
					<div className="propic-preview">{this.state.profileImage.length > 0 ? <img src={this.state.profileImage} className="propic-preview" width="200px" height="200px"/> : null}</div>

					<div className="bio"> Add Bio: <br/><textarea form="profile" ref="bio" type="text" value={this.state.userBio} onChange={this.handleChange} placeholder="Write about yourself"/></div><br/>

					<div className="buttons">
					<Button onClick={this.handleClick}>cancel</Button>
					<Input type="submit" value="Update Profile" />
					<br/>
					</div>
					
				</Form>
			</div>
			)
	}
}

function mapStateToProps(state) {
	
	return {
		userProfile: state.users.userInfo
	}
}

function mapDispatchToProps(dispatch) {

	return {
		sendUserInput: (userInfo) => {
			dispatch(sendUserInfo(userInfo))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer)
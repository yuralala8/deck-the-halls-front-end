import React from 'react'
import '../App.css'
import { Button, Icon, Rating } from 'semantic-ui-react'

const WishList = (props) => {

	if (props.wishList.length > 0) {

	return (
		<div className="wishlist">

		<p className="my-wish-list">{props.userProfile.find(user => user.id == props.id).username}'s Wish List</p>
		{props.wishList.map((wish, index) => ( 
			<div className="each-wish" key={index}>
				{props.currentUserId == props.id ? <Button icon size="mini" className="delete"onClick={() => props.handleDelete(wish)}><Icon name="delete"/></Button> : null}
				<div className="item"> {wish.item_description.length > 20 ? wish.item_description.slice(0, 60) + "..." : wish.item_description} </div> 
				<div><img src={wish.item_image} alt="" className="wish-img"/></div>

				<div className="valignment">
				<div className="more-info">{wish.item_link !== "" ? <a className="more-info" href={wish.item_link} target="_blank">More Info</a> : null}</div><br/>
				<div className="price"> ${wish.item_price}</div>
				 <div className="rank"><Rating icon='heart' rating={wish.item_rank} maxRating={5} disabled /></div>
				</div>
			</div>
			))}
		</div>
		)
	} else {

		return (

			<div className="wishlist">
			<p className="my-wish-list">{props.userProfile.find(user => user.id == props.id).username}'s Wish List</p>

			<p className="no-wish">{props.userProfile.find(user => user.id == props.id).username} hasn't added a wish yet.</p>
			</div>

			)
	} 

}


export default WishList
import React from 'react'
import '../App.css'
import { Button, Icon } from 'semantic-ui-react'

const WishList = (props) => {
	return (
		<div className="wishlist">
		{props.wishList.map((wish, index) => ( 
			<div className="each-wish" key={index}>
				{props.currentUserId == props.id ? <Button icon size="mini" className="delete"onClick={() => props.handleDelete(wish)}><Icon name="delete"/></Button> : null}
				<div className="item"> {wish.item_description} </div> 
				<div><img src={wish.item_image} alt="" className="wish-img"/></div>

				<div className="valignment">
				<div className="more-info">{wish.item_link !== "" ? <a className="more-info" href={wish.item_link} target="_blank">More Info</a> : null}</div><br/>
				<div className="price"> Price: ${wish.item_price}</div>
				 <div className="rank">Priority: {wish.item_rank}</div>
				</div>
			</div>
			))}
		</div>
		)

}


export default WishList
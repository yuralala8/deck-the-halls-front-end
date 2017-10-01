import React from 'react'
import '../App.css'


const WishList = (props) => {
	return (
		<div className="wish-container">
		{props.wishList.map((wish, index) => ( 
			<div className="each-wish" key={index}>
			{props.currentUserId == props.id ? <button id="delete"onClick={() => props.handleDelete(wish)}>x</button> : null}
			<div id="item"> {wish.item_description} </div> 
			<img src={wish.item_image} alt="" id="wish-img"/>
			<div> Price: ${wish.item_price}
			{wish.item_link !== "" ? <a id="link" href={wish.item_link} target="_blank">More Info</a> : null}</div>
			<div id="rank"> Priority: {wish.item_rank}</div>
			</div>
			))}
		</div>
		)

}


export default WishList
import React from 'react'
import '../App.css'


const WishList = (props) => {
	return (
		<div>
		{props.wishList.map((wish, index) => ( 
			<div className="each-wish" key={index}>
			<div> Description: {wish.item_description} </div> 
			<div> Price: {wish.item_price}</div>
			<div> {wish.item_link !== "" ? <a href={wish.item_link} target="_blank">Link</a> : null}</div>
			<div> Priority: {wish.item_rank}</div>
			<div> <img src={wish.item_image} alt=""/></div>
			{props.currentUserId == props.id ? <button onClick={() => props.handleDelete(wish)}>delete</button> : null}
			</div>
			))}
		</div>
		)

}


export default WishList
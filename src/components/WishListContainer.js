import React from 'react'


const WishListContainer = (props) => {

	console.log(props)
	return (
		<div>
		{props.wishList.map((wish, index) => ( 
			<div className="each-wish" key={index}>
			<div> Name: {wish.item_name} </div> 
			<div> Description: {wish.item_description} </div> 
			<div> Price: {wish.item_price}</div>
			<div> Link: {wish.item_link}</div>
			<div> Priority: {wish.item_rank}</div>
			<div> <img src={wish.item_image} alt=""/></div>
			</div>
			))}
		</div>
		)

}


export default WishListContainer
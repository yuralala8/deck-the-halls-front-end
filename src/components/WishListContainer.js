import React from 'react'


const WishListContainer = (props) => {

	console.log(props.wishLists)

	return (
		<div>
		{props.wishLists.map((wish, index) => ( 
			<div className="each-wish" key={index}>
			<div> Name: {wish.itemName} </div> 
			<div> Description: {wish.itemDescription} </div> 
			<div> Price: {wish.itemPrice}</div>
			<div> Link: {wish.itemLink}</div>
			<div> Priority: {wish.itemRank}</div>
			<div> <img src={wish.itemImage}/></div>
			</div>
			))}
		</div>
		)

}


export default WishListContainer
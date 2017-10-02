import React from 'react'
import '../App.css'


const WishList = (props) => {
	return (
		<div className="wish-container">
		{props.wishList.map((wish, index) => ( 
			<div className="each-wish" key={index}>
				{props.currentUserId == props.id ? <button id="delete"onClick={() => props.handleDelete(wish)}>x</button> : null}
				<div id="item"> {wish.item_description} </div> 
				<div><img src={wish.item_image} alt="" id="wish-img"/></div>
				<div id="link">{wish.item_link !== "" ? <a href={wish.item_link} target="_blank">More Info</a> : null}</div><br/>
				<div id="price"> Price: ${wish.item_price}</div>
				 <div id="rank">Priority: {wish.item_rank}</div>
			</div>
			))}
		</div>
		)

}


export default WishList
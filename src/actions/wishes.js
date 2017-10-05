export function savingWish(wish) {
	console.log(wish)
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwt")
    	const wishJSON = JSON.stringify({
          	item_description: wish.itemDescription,
          	item_link: wish.itemLink,
          	item_rank: wish.itemRank,
          	item_image: wish.itemImage,
          	item_price: wish.itemPrice
    	})

   		fetch('http://localhost:3000/api/v1/wishes',{
          method: 'post',
          body: wishJSON,
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then((json) => {
        dispatch({type:"SAVE_WISH", payload: json})
      })
  }
}


export function fetchWish(profileId) {
	return function(dispatch){

		const jwtToken = localStorage.getItem("jwt")

		fetch(`http://localhost:3000/api/v1/wishes/${profileId}`,{
          method: 'get',
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
        .then(res => res.json())
        .then(json => {
        	dispatch({type:"FETCHED_WISH", payload: json})
        })
	}
}


export function addWish(item) {
  return function(dispatch){

    const jwtToken = localStorage.getItem("jwt")
      const itemJSON = JSON.stringify({
            item_description: item.itemDescription,
            item_link: item.itemLink,
            item_rank: item.itemRank,
            item_image: item.itemImage,
            item_price: item.itemPrice
      })

      fetch('http://localhost:3000/api/v1/wishes',{
          method: 'post',
          body: itemJSON,
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then((json) => {
        dispatch({type:"ADD_WISH", payload: json})
      })
  }
}




export function deleteWish(wishId) {
  // console.log(wishId)
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwt")

      fetch(`http://localhost:3000/api/v1/wishes/${wishId}`,{
          method: 'post',
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then((json) => {
        dispatch({type:"DELETE_WISH", payload: json})
      })
  }
}

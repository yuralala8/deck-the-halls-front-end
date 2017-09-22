export function savingWish(wish) {
	console.log(wish)
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwt")
    	const wishJSON = JSON.stringify({
          	item_name: wish.itemName,
          	item_description: wish.itemDescription,
          	item_link: wish.itemLink,
          	item_rank: wish.itemrank,
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

export function fetchWish() {
	return function(dispatch){

		const jwtToken = localStorage.getItem("jwt")

		fetch('http://localhost:3000/api/v1/wishes',{
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
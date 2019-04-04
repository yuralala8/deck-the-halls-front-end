export function createParty(detail) {
  return function(dispatch){

    const jwtToken = localStorage.getItem("jwt")
      const detailJSON = JSON.stringify({
        location: detail.location,
        date: detail.date,
        amount: detail.amount,
        participants: detail.participants
      })

      fetch('http://localhost:3000/api/v1/parties',{
        method: 'post',
        body: detailJSON,
        headers: {
          "Authorization": `Bearer ${jwtToken}`,
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      })
      .then((res) => res.json())
      // .then(response => console.log(response.participants))
      .then((json) => {
        dispatch({type:"CREATE_PARTY", payload: json})
      })
  }
}

export function getParties(detail) {
  return function(dispatch){

    const jwtToken = localStorage.getItem("jwt")

      fetch('http://localhost:3000/api/v1/parties',{
        method: 'get',
        headers: {
          "Authorization": `Bearer ${jwtToken}`,
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      })
      .then((res) => res.json())
      // .then(response => console.log(response.participants))
      .then((json) => {
        dispatch({type:"GET_PARTIES", payload: json})
      })
  }
}

export function deleteParty(partyId) {
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwt")
      fetch(`http://localhost:3000/api/v1/parties/${partyId}`,{
        method: 'post',
        headers: {
          "Authorization": `Bearer ${jwtToken}`,
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      })
      .then((res) => res.json())
      .then((json) => {
        dispatch({type:"DELETE_PARTY", payload: json})
      })
  }
}

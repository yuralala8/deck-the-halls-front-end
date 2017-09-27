export function searchUser() {
  return function(dispatch) {
    const jwtToken = localStorage.getItem("jwt")
   		fetch('http://localhost:3000/api/v1/searches',{
          method: 'get',
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then((json) => {
        dispatch({type:"FETCH_USER", payload: json})
      })
  }
}



export function sendRequest(friendId) {
  return function(dispatch){

    const jwtToken = localStorage.getItem("jwt")
    const currentUser = localStorage.getItem('id')

    const body = JSON.stringify({friendId, currentUser})
    
      fetch('http://localhost:3000/api/v1/friendships',{
          method: 'post',
          body: body,
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then(json => {
        dispatch({type:"SEND_REQUEST", payload: json})
      })
      .then(window.location.reload())
  }
}

export function acceptRequest(friendId) {
  return function(dispatch){

    const jwtToken = localStorage.getItem("jwt")
    const currentUser = localStorage.getItem('id')

    const body = JSON.stringify({friendId, currentUser})

      fetch('http://localhost:3000/api/v1/accept',{
          method: 'post',
          body: body,
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then(json => {
        dispatch({type:"ACCEPT_REQUEST", payload: json})
      })
      .then(window.location.reload())
  }
}


export function fetchRequest(currentUser) {
  return function(dispatch){

    const jwtToken = localStorage.getItem("jwt")

      fetch(`http://localhost:3000/api/v1/requests/${currentUser}`,{
          method: 'get',
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then(json => { 
        dispatch({type:"FETCH_REQUEST", payload: json})
      })
  }
}



export function myFriends(currentUser) {
  return function(dispatch){

    const jwtToken = localStorage.getItem("jwt")

      fetch(`http://localhost:3000/api/v1/friendships/${currentUser}`,{
          method: 'get',
          headers: {
            "Authorization": `Bearer ${jwtToken}`,
            "Content-Type":"application/json",
            "Accept":"application/json"
          }
        })
      .then((res) => res.json())
      .then(json => { 
        dispatch({type:"SHOW_FRIENDS", payload: json})
      })
  }
}



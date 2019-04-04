export function fetchResults(searchTerm) {
  return function(dispatch){
    const jwtToken = localStorage.getItem("jwt")
    fetch('http://localhost:3000/api/v1/searches', {
      method: 'post',
      body: JSON.stringify({"search_term":searchTerm}),
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch({type:"FETCH_DATA", payload: json.searchItems})
    })
  }
}
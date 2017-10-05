import React from 'react'


const Countdown = () => {

	let christmas = new Date("Dec 25, 2017 00:00:00").getTime();
   
    let x = setInterval(function() {
  
      let distance = christmas - Date.now()
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " 

  }, 1000)

	return (

		<div>
  
			<div id="countdown"></div>
			

		</div>
		)
}



export default Countdown
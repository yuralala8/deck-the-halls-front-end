import React from 'react'

const Countdown = () => {
  // TODO reset the date to be xmas of the year after once it passes
	let christmas = new Date("Dec 25, 2019 00:00:00").getTime();
   
    let x = setInterval(function() {
  
      let distance = christmas - Date.now()
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " 

  }, 1000)

	return (
			<div id="countdown">
      </div>
		)
}

export default Countdown
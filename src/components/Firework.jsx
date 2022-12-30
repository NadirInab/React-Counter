import React from 'react' ;
import Fireworks from "../assets/newtrimedvideo.mp4" ;
import "../style/style.css";


function Firework() {
  return (
    <>
        <video controls autoPlay loop muted>
          <source src={Fireworks} type="video/mp4"></source>
        </video>
        <div className='content'>
            {/* <h1>Happy New year <b> Youcoders !!  </b> </h1> */}
        </div>
    </>
  )
}

export default Firework
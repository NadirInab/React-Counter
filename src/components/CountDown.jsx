import React, { useState, useRef, useEffect} from 'react';
import "../style/style.css";
import sounds from "../assets/trimedMp3.mp3" ;

function CountDown() {
        const [flag , setFlag ] = useState(true) ;
        const [daysTimer, setDaysTimer] = useState("00") ;
        const [hoursTimer, sethoursTimer] = useState("00") ;
        const [munitesTimer, setMunitesTimer] = useState("00") ;
        const [secondesTimer, setSecondesTimer] = useState("00") ;

        let timeInterval = useRef()  ;
        
        let play = () =>{
            new Audio(sounds).play() ;
        }

        const triggerTimer = ()=>{
            const countDownDate = new Date("December 30, 2022 14:50:00").getTime() ;

            timeInterval = setInterval(()=>{
                const now = new Date().getTime() ;
                const disparity = countDownDate - now ;
                const days = Math.floor(disparity / (1000 * 60 * 60 * 24)) ;
                const hours = Math.floor((disparity % (1000 * 60 * 60*24) / (1000*60*60) )) ;
                const Munites = Math.floor((disparity % (1000 * 60 * 60 )) / (1000*60)) ;
                const seconds = Math.floor((disparity % (1000 * 60)) / 1000) ;
                if(disparity < 0){
                    clearInterval(timeInterval.current) ;
                    setFlag(false) ;
                    play() ;
                }else{
                    setDaysTimer(days) ;
                    sethoursTimer(hours) ;
                    setMunitesTimer(Munites) ;
                    setSecondesTimer(seconds) ;
                }
            }, 1000) ;
        } ;

        useEffect(()=>{
            triggerTimer() ;
            // play() ;
        })

    return (
        <>
        {flag && ( <section className='timerContainer'>
                <div>
                    <div className='countDownDescription'>
                        <div className='newYearContainer'>
                            <h2 className='loader'></h2> 
                            <small id='year'> 2023</small>
                            
                        </div>
                    </div>
                    <div className='timer'>
                        <div className='timeHolder'>
                            <p>{daysTimer}</p>
                            <p className='secondeTimers'>Days </p>
                            <span> : </span>
                        </div>
                        <div className='timeHolder'>
                            <p>{hoursTimer}</p>
                            <p className='secondeTimers' >Hours </p>
                            <span> : </span>
                        </div>
                        <div className='timeHolder'>
                            <p>{munitesTimer}</p>
                            <p className='secondeTimers'>Munites </p>
                            <span> : </span>
                        </div>
                        <div className='timeHolder'>
                            <p id='seconds'>{secondesTimer}</p>
                            <p className='secondeTimers' >Secondes </p>
                        </div>
                    </div>
                </div>
            </section>)}
           
        </>
    )
}

export default CountDown
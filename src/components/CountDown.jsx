import React, { useState, useRef, useEffect} from 'react';
// import {GiTimeTrap} from "react-icons/gi" ;
import { FaSpinner } from "react-icons/fa" ;
import "../style/style.css";

function CountDown() {
        const [daysTimer, setDaysTimer] = useState("00") ;
        const [hoursTimer, sethoursTimer] = useState("00") ;
        const [munitesTimer, setMunitesTimer] = useState("00") ;
        const [secondesTimer, setSecondesTimer] = useState("00") ;

        let timeInterval = useRef()  ;

        const triggerTimer = ()=>{
            const countDownDate = new Date("January 1, 2023 00:00:00").getTime() ;

            timeInterval = setInterval(()=>{
                
                const now = new Date().getTime() ;
                const disparity = countDownDate - now ;
                const days = Math.floor(disparity / (1000 * 60 * 60 * 24)) ;
                const hours = Math.floor((disparity % (1000 * 60 * 60*24) / (1000*60*60) )) ;
                const Munites = Math.floor((disparity % (1000 * 60 * 60 )) / (1000*60)) ;
                const seconds = Math.floor((disparity % (1000 * 60)) / 1000) ;
                if(disparity < 0){
                    clearInterval(timeInterval.current) ;

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
        })

    return (
        <>
            <section className='timerContainer'>
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
                            <p className='secondeTimers'>Days</p>
                            <span> : </span>
                        </div>
                        <div className='timeHolder'>
                            <p>{hoursTimer}</p>
                            <p className='secondeTimers' >Hours</p>
                            <span> : </span>
                        </div>
                        <div className='timeHolder'>
                            <p>{munitesTimer}</p>
                            <p className='secondeTimers'>Munites</p>
                            <span> : </span>
                        </div>
                        <div className='timeHolder'>
                            <p id='seconds'>{secondesTimer}</p>
                            <p className='secondeTimers' >Secondes</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CountDown
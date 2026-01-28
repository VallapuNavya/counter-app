import React,{useEffect,useState} from 'react'
import dateTime from 'date-Time';
import './clock.css'
const Clock=()=>{
    const [currentTime,setCurrentTime]=useState(dateTime());
    const [showClock,setShowClock]=useState(true);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentTime(dateTime());
            console.log("Updating Time");
        },1000);
        return()=>{
            clearInterval(interval)
        console.log("Cleaning up");
        }
    },[]);
    return(
       <div className="page">
        <div className="clock-app">
            <header>
                <h1>Clock</h1>
                <button onClick={()=>setShowClock(!showClock)}>
                    {showClock ? "Hide Clock" : "Show Clock"}
                </button>
            </header>
            {showClock && (
                <div className="clock-container">
                <img src="https://rukminim2.flixcart.com/image/480/640/xif0q/wall-clock/v/2/g/analog-wall-clock-for-home-24-amham235-analog-asian-multistore-original-imagg55c6qxgwt5z.jpeg?q=90" alt="clock" className='small-clock' />
                <div>
                    <p className="time-text">Current Time:
                        {currentTime}
                    </p>
                </div>
            </div>
            )}
            
        </div>
        </div> 
    )
}
export default Clock;
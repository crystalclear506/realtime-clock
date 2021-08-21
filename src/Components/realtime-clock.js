import React, { useEffect, useState } from 'react';

import './realtime-clock.css';

const RealtimeClock = () => {
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    let interval;
    useEffect(() => {
       interval = setInterval(() => {
            setDate(new Date());
       }, 1000);
    }, []);

    useEffect(() => {
        setHour(date.getHours().toString().padStart(2, '0'));
        setMinute(date.getMinutes().toString().padStart(2, '0'));
        setSecond(date.getSeconds().toString().padStart(2, '0'));      
    }, [date]);

    return (
    <div className="clock-container"> 
        <div className="time-container">{ hour } : { minute } : { second } </div>
        <div className="date-container"> Tue, August 17, 2021</div>
    </div>
    )
}

export default RealtimeClock;
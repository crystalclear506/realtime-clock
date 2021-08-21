import React, { useEffect, useState } from 'react';
import { getDayById, getMonthById } from '../utils';

import './realtime-clock.css';

const RealtimeClock = () => {
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [dateNo, setDateNo] = useState('');
    const [year, setYear] = useState('');


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
        
        const day  = getDayById(date.getDay());
        setDay(day);

        const month = getMonthById(date.getMonth());
        setMonth(month);

        setDateNo(date.getDate());
        setYear(date.getFullYear());

    }, [date]);

    return (
    <div className="clock-container"> 
        <div className="time-container">{ hour } : { minute } : { second } </div>
        <div className="date-container"> { day }, { month } { dateNo}, { year }</div>
    </div>
    )
}

export default RealtimeClock;
import React from 'react';
import { getDayById, getMonthById } from '../utils';

import styles from './realtime-clock.css';

class RealtimeClock extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            date: null,
            hour: null,
            minute: null,
            second: null,
            day: null,
            month: null,
            dateNo: null,
            year: null,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const date = new Date();
            this.setState({
                hour: date.getHours().toString().padStart(2, '0'),
                minute: date.getMinutes().toString().padStart(2, '0'),
                second: date.getSeconds().toString().padStart(2, '0'),
                day: getDayById(date.getDay()),
                year: date.getFullYear(),
                month:  getMonthById(date.getMonth()),
                date: date.getDate(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={styles["clock-container"]}> 
                <div className={styles["time-container"]}>{ this.state.hour } : { this.state.minute } : { this.state.second } </div>
                <div className={styles["date-container"]}> { this.state.day }, { this.state.month } { this.state.date}, { this.state.year }</div>
            </div>
        )
    }
}

export default RealtimeClock;
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import RealtimeClock from './Components/realtime-clock';

const DemoPage = () => {
    return (
        <div>
            <RealtimeClock/>
        </div>
    )
}
ReactDOM.render(<DemoPage/>, document.getElementById('root'));
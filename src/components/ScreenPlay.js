import React, { Component } from 'react';
import './ScreenPlay.css';
import Circle from './Circle.js';

class ScreenPlay extends Component {
    render(){
        const circles = [<Circle />, <Circle />];
            
        return <div className="screen-play">
                {circles}
            </div>
    }
}

export default ScreenPlay;

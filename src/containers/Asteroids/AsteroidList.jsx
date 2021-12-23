import React from 'react';
import Asteroid from './Asteroid';
import './Asteroid.css';

export default function AsteroidList(props) {
    return (
        <div className="marquee">
                {props.asteroidList.map(element => {
                    return <Asteroid key={element.id} className="asteroid" asteroidData={element} />
                })}
        </div>
    )
}

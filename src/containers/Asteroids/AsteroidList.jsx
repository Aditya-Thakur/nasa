import React from 'react';
import Asteroid from './Asteroid';
import './Asteroid.css';

export default function AsteroidList(props) {
    return (
        <div className="grid-container">
                {props.asteroidList.map(element => {
                    return <Asteroid key={element.id} asteroidData={element} />
                })}
        </div>
    )
}

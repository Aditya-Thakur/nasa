import React, { useEffect, useState } from 'react';
import { browse } from '../../services/info.service';
import AsteroidList from '../Asteroids/AsteroidList';
import DatePicker from '../DatePicker/DatePicker';
import './home.css';


function Home() {
    const [showAsteroids, setShowAsteroids] = useState(false);
    const [asteroidList, setAsteroidList] = useState([]);
    useEffect(() => {
        browse().then(res => {
            setAsteroidList(res.near_earth_objects);
            setShowAsteroids(true);
        }).catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <div className="container">
            <div className="left">
                <h4>Asteroids are fun</h4>
            </div>
            <div className="center">
                {
                    !showAsteroids ? (<div>Loading...</div>) : (<AsteroidList asteroidList={asteroidList} />)
                }
            </div>
            <div className="right">
               <DatePicker />
            </div>
        </div>
    )
}

export default Home

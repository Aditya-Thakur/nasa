import React, { useEffect, useState } from 'react';
import { browse } from '../../services/info.service';
import Asteroids from '../Asteroids/Asteroids';
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
        <div>
            <div className="container">
                {
                    !showAsteroids ? (<div>Loading...</div>) : (<Asteroids asteroidsList = {asteroidList}/>)
                }
            </div>
        </div>
    )
}

export default Home

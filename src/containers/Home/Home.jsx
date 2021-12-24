import React, { useEffect, useState } from 'react';
import { browse } from '../../services/info.service';
import AsteroidList from '../Asteroids/AsteroidList';
import AsteroidRange from '../Asteroids/AsteroidRange';
import DatePicker from '../DatePicker/DatePicker';
import './home.css';


function Home() {
    const [showAsteroids, setShowAsteroids] = useState(false);
    const [showAsteroidRange, setshowAsteroidRange] = useState(false)
    const [asteroidList, setAsteroidList] = useState([]);
    const [asteroidRange, setasteroidRange] = useState({})
    useEffect(() => {
        browse().then(res => {
            setAsteroidList(res.near_earth_objects.slice(0,9));
            setShowAsteroids(true);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const toAsteroidView = (astList) => {
        console.log('check');
        console.log(astList);
        setasteroidRange(astList);
        setshowAsteroidRange(true);
    }
    return (
        <div className="container">
            <div className="left">
                {/* This element holds the earth image */}
            </div>
            <div className="center">
                {
                    !showAsteroids ? (<div>Loading...</div>) : (
                        showAsteroidRange ? <AsteroidRange asteroidRange={asteroidRange} /> :
                    <AsteroidList asteroidList={asteroidList} />
                    )
                }
            </div>
            <div className="right">
               <DatePicker toAsteroidView = {toAsteroidView} />
            </div>
        </div>
    )
}

export default Home

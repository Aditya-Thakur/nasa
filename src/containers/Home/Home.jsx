import React, { useEffect, useState } from 'react';
import { browse } from '../../services/info.service';
import AsteroidDetails from '../Asteroids/AsteroidDetails';
import AsteroidList from '../Asteroids/AsteroidList';
import AsteroidRange from '../Asteroids/AsteroidRange';
import DatePicker from '../DatePicker/DatePicker';
import CloseButton from '../shared/Buttons/CloseButton';
import './home.css';
import earthImage from '../../assets/images/earth.png';

function Home() {
    const [showAsteroids, setShowAsteroids] = useState(false);
    const [showAsteroidRange, setshowAsteroidRange] = useState(false)
    const [asteroidList, setAsteroidList] = useState([]);
    const [asteroidRange, setasteroidRange] = useState({});
    const [showDetailsPane, setshowDetailsPane] = useState(false);
    const [astId, setastId] = useState(0)
    useEffect(() => {
        setShowAsteroids(false);
        browse().then(res => {
            setAsteroidList(res.near_earth_objects.slice(0, 9));
            setShowAsteroids(true);
        }).catch(err => {
            console.log(err);
        })
    }, [showAsteroidRange]);

    const toAsteroidView = (astList) => {
        setasteroidRange(astList);
        setshowAsteroidRange(true);
    }

    const showDetails = (id) => {
        console.log(id);
        setastId(id);
        setshowDetailsPane(true);
    }
    return (
        <div className="container">
            <div className="left">
                <img src={earthImage} alt="" />
            </div>
            <div className="center">
                {
                    !showAsteroids ? (<div>Loading...</div>) : (
                        <>
                            {showAsteroidRange ? (<div onClick={() => {
                                setshowAsteroidRange(false);
                            }} className='closeRow'>
                                <CloseButton />
                            </div>) : (<></>)}
                            {showAsteroidRange ? <AsteroidRange asteroidRange={asteroidRange} showDetails={showDetails} /> :
                                <AsteroidList asteroidList={asteroidList} showDetails={showDetails} />}
                        </>

                    )
                }
            </div>
            <div className="right">
                {showDetailsPane ? (<div onClick={() => {
                        setshowDetailsPane(false);
                    }} className='closeRow'>
                        <CloseButton />
                    </div>) : (<></>)
                }
                {
                    showDetailsPane ? (<AsteroidDetails astId={astId} />) : (<></>)
                }
                <DatePicker toAsteroidView={toAsteroidView} />

            </div>
        </div>
    )
}

export default Home

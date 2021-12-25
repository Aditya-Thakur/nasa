import React, { useEffect, useState } from 'react';
import { browse, feed } from '../../services/info.service';
import AsteroidDetails from '../Asteroids/AsteroidDetails';
import AsteroidList from '../Asteroids/AsteroidList';
import AsteroidRange from '../Asteroids/AsteroidRange';
import DatePicker from '../DatePicker/DatePicker';
import CloseButton from '../shared/Buttons/CloseButton';
import './home.css';
import earthImage from '../../assets/images/earth.png';
import Loader from '../shared/Loader/Loader';

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

    const dateRetriever = (dateRange) => {
        setshowAsteroidRange(false);
        setShowAsteroids(false);
        feed(dateRange).then(
            res => {
                setasteroidRange(res.near_earth_objects);
                setShowAsteroids(true);
                setshowAsteroidRange(true);
            }
        ).catch( err => {
            console.log(err);
        })
      
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
                    !showAsteroids ? (<Loader />) : (
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
                <DatePicker dateRetriever={dateRetriever} />

            </div>
        </div>
    )
}

export default Home

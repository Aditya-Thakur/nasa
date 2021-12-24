import React, { useEffect, useState } from 'react'
import { lookup } from '../../services/info.service';

export default function AsteroidDetails(props) {
    const [asteroidData, setasteroidData] = useState({});
    const [showDetails, setshowDetails] = useState(false)
    useEffect(() => {
        lookup(props.astId).then(res => {
            setasteroidData(res);
            setshowDetails(true);
        }).catch(err => {
            console.log(err);
        })
    }, [props.astId]);
    return (
        <div>
            {showDetails ?
                (
                    <div className="details">
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>{asteroidData.name_limited}</td>
                            </tr>
                            <tr>
                                <td>Full name:</td>
                                <td>{asteroidData.name}</td>
                            </tr>
                            <tr>
                                <td>Link:</td>
                                <td><a href="{asteroidData.nasa_jpl_urk}" target="_blank" rel="noopener noreferrer">Click here</a></td>
                            </tr>
                            <tr>
                                <td>NEO Reference ID:</td>
                                <td>{asteroidData.neo_reference_id}</td>
                            </tr>
                        </table>
                    </div>
                ) :
                (
                    <p>Loading...</p>
                )}
        </div>
    )
}

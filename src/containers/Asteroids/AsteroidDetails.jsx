import React, { useEffect, useState } from 'react'
import { lookup } from '../../services/info.service';

export default function AsteroidDetails(props) {
    const [asteroidData, setasteroidData] = useState({});
    const [showDetails, setshowDetails] = useState(false)
    useEffect(() => {
        setshowDetails(false);
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
                        <table className='table'>
                            <thead>
                            <tr>
                                <th>Full name:</th>
                                <th>{asteroidData.name}</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td>Link:</td>
                                <td>
                                    <a href={asteroidData.nasa_jpl_url} target="_blank" rel="noopener noreferrer">Click here</a>
                                </td>
                            </tr>
                            <tr>
                                <td>NEO Reference ID:</td>
                                <td>{asteroidData.neo_reference_id}</td>
                            </tr>
                            <tr>
                                <td>Absolute Magnitude:</td>
                                <td>{asteroidData.absolute_magnitude_h}</td>
                            </tr>
                            <tr>
                                <td>Designation:</td>
                                <td>{asteroidData.designation}</td>
                            </tr>
                            <tr>
                                <td>Estimated Diameter (in KM):</td>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Maximum Estimation:</td>
                                                <td>{(asteroidData.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Minimum Estimation:</td>
                                                <td>{asteroidData.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>Hazardous:</td>
                                <td> {asteroidData.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>Sentry:</td>
                                <td> {asteroidData.is_sentry_object ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>Orbital Data:</td>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Aphelion distance: </td>
                                                <td>{parseFloat(asteroidData.orbital_data.aphelion_distance).toFixed(4)}</td>
                                            </tr>
                                            <tr>
                                                <td>First Observation date: </td>
                                                <td>{asteroidData.orbital_data.first_observation_date}</td>
                                            </tr>
                                            <tr>
                                                <td>Last Observation date: </td>
                                                <td>{asteroidData.orbital_data.last_observation_date}</td>
                                            </tr>
                                            <tr>
                                                <td>Mean motion: </td>
                                                <td>{parseFloat(asteroidData.orbital_data.mean_motion).toFixed(4)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                ) :
                (
                    <p>Loading...</p>
                )}
        </div>
    )
}

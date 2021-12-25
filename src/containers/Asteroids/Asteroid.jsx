import React from 'react';
import './Asteroid.css';
import AsteroidImage from '../../assets/images/asteroid.gif';
export default function Asteroid(props) {
    const ast = props.asteroidData;
    return (
        <div className="asterCard">
            <div className="top">
                <h1>{ast.name_limited}</h1>
                <p>{ast.name}</p>
            </div>
            <img src={AsteroidImage} alt="Asteroid" height="100px" width="auto" title='Know more' onClick={() => {
                props.showDetails(ast.id);
            }} />
            <div className="bottom">
                <div className="data-left">
                    <div className="data">Diameter: </div>
                    <div className="data">&emsp;Max: {Math.round(ast.estimated_diameter.kilometers.estimated_diameter_max)} Kms</div>
                    <div className="data">&emsp;Min: {Math.round(ast.estimated_diameter.kilometers.estimated_diameter_min)} Kms</div>
                    <div className="data">Approach Date: </div>
                    <div className="data">{(ast.close_approach_data.reduce(function (prev, curr) {
                        return (Math.abs(Date.parse(curr.close_approach_date_full) - Date.parse(new Date())) < Math.abs(Date.parse(prev.close_approach_date_full) - Date.parse(new Date())) ? curr : prev)
                    }).close_approach_date)}</div>
                </div>
                <div className="data-right">
                    <div className="data">Magnitude: {ast.absolute_magnitude_h}</div>
                    <div className="data">Designation: {ast.designation}</div>
                    <div className="data">Hazardous: {ast.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</div>
                    <div className="data">Sentry: {ast.is_sentry_object ? 'Yes' : 'No'}</div>
                </div>
            </div>
        </div>
    )
}

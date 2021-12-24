import React from 'react'
import { feed } from '../../services/info.service'
import './DatePicker.css'
export default function DatePicker({toAsteroidView}) {
    let dateRange = {
        startDate: null,
        endDate: null
    }

    return (
        <div className="card">
            <div className="card-title">
                Search by date range
            </div>
            <div className="card-body">
                <p>Start Date:</p>
                <input type="date" name="Start_Date" id="" onChange={ event => {
                    dateRange.startDate = event.target.value
                }}  />
                <p>End Date:</p>
                <input type="date" name="End_Date" id="" onChange={ event => {
                    dateRange.endDate = event.target.value
                }}  />
                <button onClick={
                    event => {
                        event.preventDefault();
                        feed(dateRange).then(
                            res => toAsteroidView(res.near_earth_objects)
                        ).catch( err => {
                            console.log(err);
                        })
                        
                    }
                    }>Search</button>
            </div>
        </div>
    )
}

import React from 'react'
import './DatePicker.css'
export default function DatePicker() {
    return (
        <div className="card">
            <div className="card-title">
                Search by date range
            </div>
            <div className="card-body">
                <input type="date" name="Start Date" id="" />
                <input type="date" name="End Date" id="" />
            </div>
        </div>
    )
}

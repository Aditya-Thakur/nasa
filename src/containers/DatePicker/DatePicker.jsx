import { TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { feed } from '../../services/info.service'
import './DatePicker.css'
export default function DatePicker() {
    let dateRange = {
        startDate: new Date().toDateString,
        endDate: new Date().toDateString
    }

    return (
        <div className="card">
            <div className="card-title">
                Search by date range
            </div>
            <div className="card-body">
                <p>Start Date:</p>
                {/* <TextField value={dateRange.startDate} id='startDate' label="Start Date" type="date" onChange={ event => {
                    dateRange.startDate = event.target.value
                }}  /> */}
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
                        feed(dateRange)
                    }
                    }>Search</button>
            </div>
        </div>
    )
}

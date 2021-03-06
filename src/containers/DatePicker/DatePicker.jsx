import React, { useState } from 'react';
import './DatePicker.css';
export default function DatePicker({dateRetriever}) {

    const [startDate, setstartDate] = useState(false);
    const [endDate, setendDate] = useState(false)

    const [errorMsg, seterrorMsg] = useState('');
    const [showerrMsg, setshowerrMsg] = useState(false);

    const handleValidation = () => {
        if(startDate) {
            if(endDate) {
                const diffTime = Date.parse(endDate) - Date.parse(startDate);
                const dateDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (dateDiff <= 7 && dateDiff >= 0) {
                    dateRetriever({startDate, endDate});
                } else {
                    showErrorMessage("Date range must be 7 days or less");
                }
            } else {
                showErrorMessage("Please choose end date.")
            }
        } else {
            showErrorMessage("Please choose start date.")
        }
        return false;
    }

    const showErrorMessage = (errorMsg) => {
        seterrorMsg(errorMsg);
        setshowerrMsg(true);
    }

    return (
        <div className="card">
            <div className="card-title">
                Search by date range
            </div>
            <div className="card-body">
                <p>Start Date:</p>
                <input type="date" name="Start_Date" selected={startDate} data-testid="startDate" onChange={ event => {
                    setstartDate(event.target.value);
                }}  />
                <p>End Date:</p>
                <input type="date" name="End_Date" selected={endDate} data-testid="endDate" onChange={ event => {
                    setendDate(event.target.value);
                }}  />
                <button data-testid="searchButton" onClick={
                    event => {
                        event.preventDefault();
                        setshowerrMsg(false);
                        handleValidation();                       
                    }
                    }>Search</button>
                    {showerrMsg ? (<p className='errorMsg'>{errorMsg}</p>) : (<></>)}
            </div>
        </div>
    )
}

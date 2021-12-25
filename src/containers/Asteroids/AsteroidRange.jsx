import React from 'react'
import { useState } from 'react';
import AsteroidList from './AsteroidList'

export default function AsteroidRange(props) {
    const [current, setcurrent] = useState(0)
    const convert = (obj) => {
        return Object.keys(obj).map(key => ({
            date: key,
            list: obj[key]
        }));
    }
    let asteroidData = (convert(props.asteroidRange)).sort( (a,b) => Date.parse(a.date) - Date.parse(b.date));
    return (
        <div>
          <div className="header">
              <div className="left-arrow" title='Previous Data' onClick={() => {
              if(current === 0) {
                    setcurrent(asteroidData.length - 1)
            } else {
                    setcurrent(current - 1)
                }
              }}> ◀️ </div>
              <div className="date"> {asteroidData[current].date} ({asteroidData[current].list.length} near earth objects found)</div>
              <div className="right-arrow" title='Next Data' onClick={() => {
                  if(current === asteroidData.length - 1) {
                      setcurrent(0);
                  } else {
                      setcurrent(current + 1);
                  }
              }}> ▶️ </div>
          </div>
          <AsteroidList asteroidList = {asteroidData[current].list} showDetails={props.showDetails} />
        </div>
    )
}

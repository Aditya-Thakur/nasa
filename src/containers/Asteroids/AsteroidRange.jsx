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
    let asteroidData = convert(props.asteroidRange);
    return (
        <div>
          <div className="header">
              <div className="left-arrow" onClick={() => {
              if(current === 0) {
                    setcurrent(asteroidData.length - 1)
            } else {
                    setcurrent(current - 1)
                }
              }}> ◀️ </div>
              <div className="date"> {asteroidData[current].date}</div>
              <div className="right-arrow" onClick={() => {
                  if(current === asteroidData.length - 1) {
                      setcurrent(0);
                  } else {
                      setcurrent(current + 1);
                  }
              }}> ▶️ </div>
          </div>
          <AsteroidList asteroidList = {asteroidData[current].list}/>
        </div>
    )
}

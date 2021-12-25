import React from 'react';
import './Loader.css';

export default function Loader() {
    return (
        <div className="loader-all">
        <div className="loader-container">
          <div className="loader-top"></div>
          <div className="loader-inner-oval">
            <div className="loader-circle1"></div>
            <div className="loader-circle2"></div>
            <div className="loader-circle3"></div>
          </div>
        </div>
      </div>      
    )
}

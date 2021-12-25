import React from 'react';
import './CloseButton.css'

export default function CloseButton() {
    return (
        <div class="close">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <svg viewBox="0 0 36 36" class="circle">
                <path
                    stroke-dasharray="100, 100"
                    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
        </div>
    )
}

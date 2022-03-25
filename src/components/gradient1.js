import React from "react";

export default class gradient1 extends React.Component {
    render() {
        return (
            <svg height="150" width="400">
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
                    </linearGradient>
                </defs>
                {/*<ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#gradient1)" />*/}
            </svg>
        )
    }
}
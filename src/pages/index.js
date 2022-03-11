import React, {useState} from 'react';
import { Carousel } from 'react-carousel-minimal';
import './pages.css';
import "./ColoringPage"
import '../components/lotr1.jpg'
import '../components/lotr2.jpg'
import '../components/lotr3.jpg'
import '../components/lotr4.jpg'

// This is the home page that displays when the page first loads
const Home = () => {
    const data = [
        {
            "image": require('../components/lotr1.jpg'),
            "caption": "pic 1"
        },
        {
            "image": require("../components/lotr2.jpg"),
            "caption": "pic 2"
        },
        {
            "image": require("../components/lotr3.jpg"),
            "caption": "pic 3"
        },
        {
            "image": require("../components/lotr4.jpg"),
            "caption": "pic 4"
        }
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    //add a carousel here with the different pictures that can be painted
    return (
        <div className="Home">
            <div className='header-container'>
                <div className="header">Welcome to the Lord of the Rings Coloring Book App!</div>
            </div>

            <div className="subheader">Click on a picture to get coloring!</div>

            <div style={{padding: "1rem 2rem 1rem 2rem"}}>
                <Carousel
                    data={data}
                    time={8000}
                    height="60vh"
                    width="auto"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="palegreen"
                    slideImageFit="contain"
                    thumbnails={true}
                    thumbnailWidth="150px"
                    style={{
                        textAlign: "center",
                        maxWidth: "auto",
                        maxHeight: "60vh",
                        margin: "15px auto",
                    }}
                />
            </div>
        </div>
    );
};

export default Home;

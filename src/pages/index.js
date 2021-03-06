import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
// import { Carousel } from 'react-carousel-minimal';
import './pages.css';
import "./ColoringPage"
import "./ShireColoringPage"
import "./notavailable"
import gollumpic from '../components/gollumpic.jpg'
import lotr1 from '../components/lotr1.jpg'
import lotr2 from '../components/lotr2.jpg'
import lotr3 from '../components/lotr3.jpg'
import lotr4 from '../components/lotr4.jpg'

// This is the home page that displays when the page first loads
const Home = () => {
    const data = [
        {
            "image": require('../components/gollumpic.jpg'),
            "caption": "Gollum Coloring Page"
        },
        {
            "image": require("../components/lotr1.jpg"),
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

    //add a carousel here with the different pictures that can be painted?
    return (
        <div className="Home">
            <div className='header-container'>
                <div className="header">Welcome to the Lord of the Rings Coloring Book App!</div>
            </div>

            <div className="subheader">Click on a picture to get coloring!</div>


                <div className="Nav">
                    <div className="NavLink">
                        <NavLink to="/coloringpage" activeStyle>
                            <img src={gollumpic} alt="gollum" height={500} width={500} />
                        </NavLink>
                        <NavLink to="/shirecoloringpage" activeStyle>
                            <img src={lotr1} alt="shire" height={500} width={700} />
                        </NavLink>
                        <NavLink to="/notavailable" activeStyle>
                            <img src={lotr2} alt="img1" height={550} width={500} />
                        </NavLink>
                        <NavLink to="/notavailable" activeStyle>
                            <img src={lotr3} alt="img1" height={550} width={400} />
                        </NavLink>
                        <NavLink to="/notavailable" activeStyle>
                            <img src={lotr4} alt="img1" height={550} width={400} />
                        </NavLink>
                    </div>
                </div>
            <div className="subheader2">This section of the project was created by Stephanie Shutter for Engl375. If you have any
            suggestions, please contact me on LinkedIn at <a href={'https://www.linkedin.com/in/stephanie-shutter/'}>
                    https://www.linkedin.com/in/stephanie-shutter/</a>
            </div>
        </div>
    );
};

{/*<Carousel*/}
{/*    data={data}*/}
{/*    time={8000}*/}
{/*    height="60vh"*/}
{/*    width="auto"*/}
{/*    captionStyle={captionStyle}*/}
{/*    radius="10px"*/}
{/*    slideNumber={true}*/}
{/*    slideNumberStyle={slideNumberStyle}*/}
{/*    captionPosition="bottom"*/}
{/*    automatic={true}*/}
{/*    dots={true}*/}
{/*    pauseIconColor="white"*/}
{/*    pauseIconSize="40px"*/}
{/*    slideBackgroundColor="palegreen"*/}
{/*    slideImageFit="contain"*/}
{/*    thumbnails={true}*/}
{/*    thumbnailWidth="150px"*/}
{/*    style={{*/}
{/*        textAlign: "center",*/}
{/*        maxWidth: "auto",*/}
{/*        maxHeight: "60vh",*/}
{/*        margin: "15px auto",*/}
{/*    }}*/}
{/*/>*/}

export default Home;

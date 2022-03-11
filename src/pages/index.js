import React, {useState} from 'react';
import { NavLink as Link } from "react-router-dom";
// import { Carousel } from 'react-carousel-minimal';
import './pages.css';
import "./ColoringPage"
import lotr1 from '../components/lotr1.jpg'
import lotr2 from '../components/lotr2.jpg'
import lotr3 from '../components/lotr3.jpg'
import lotr4 from '../components/lotr4.jpg'
import {NavLink} from "../navbar/NavbarElements";

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
                <div className="Nav">
                    <div className="NavMenu">
                        <div className="NavLink">
                            <NavLink to="/coloringpage" activeStyle>
                                <img src={lotr1} alt="img1" height={600} width={800} />
                            </NavLink>
                            <NavLink to="/coloringpage" activeStyle>
                                <img src={lotr2} alt="img1" height={600} width={800} />
                            </NavLink>
                            <NavLink to="/coloringpage" activeStyle>
                                <img src={lotr3} alt="img1" height={600} width={800} />
                            </NavLink>
                            <NavLink to="/coloringpage" activeStyle>
                                <img src={lotr4} alt="img1" height={600} width={800} />
                            </NavLink>
                        </div>
                    </div>
                </div>
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

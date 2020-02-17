import React from 'react';
import {Parallax} from "react-parallax";

import './../styles/HomeParallax.css'

const parallaxImage = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80";


const HomeParallax = () => (
    <div id={"home-parallax"}>
        <Parallax bgImage={parallaxImage} strength={500}>
            <div style={{height: 500}}>
            </div>
        </Parallax>
    </div>
);

export default HomeParallax;
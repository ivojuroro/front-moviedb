import React from 'react';
import {Container} from "react-bootstrap";


import HomeParallax from "../components/HomeParallax";
import './../styles/Home.css'
import MoviesList from "../components/MoviesList";
import MovieCarousel from "../components/MovieCarousel";


let Home = (props) =>
    <div id={"home-page"}>
        <HomeParallax/>
        <Container>
            <h2 id={"home-title"}>
                Moment Movies
            </h2>
            <p id={"home-presentation"}>
                Find your favorite movies all in one place. With moment movies you'll get to know in premier the best movies in theaters!
            </p>
            <MoviesList/>
            <p>
              Or just leave it to us!
            </p>
            <MovieCarousel/>
        </Container>
    </div>;

export default Home;
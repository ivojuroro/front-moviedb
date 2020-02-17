import React from 'react';
import {fetchDiscoveredMovies} from './../services/movies-service';
import {Carousel, Col, Container} from "react-bootstrap";

import './../styles/MovieCarousel.css'
import {LinkContainer} from "react-router-bootstrap";


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class MovieCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            discoveredMovies: []
        }
    }

    retrieveDiscoveredMovies() {
        fetchDiscoveredMovies().then(movies => {
                this.setState({
                    discoveredMovies: movies.data.results
                });
                console.log(this.state.discoveredMovies)
            }
        ).catch(error => {
            console.log(error);
        })


    }

    componentDidMount() {
        this.retrieveDiscoveredMovies();
    }

    getCards() {
        return (this.state.discoveredMovies.map(dMovie =>
                <LinkContainer to={`/movie/${dMovie.id}`}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={IMG_BASE_URL + dMovie.poster_path}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{dMovie.title}</h3>
                            <p>{dMovie.tagline}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </LinkContainer>
            )

        );
    }

    render() {
        return (
            <div id={"other-movies"} class="d-flex justify-content-center">
                <Col md={{span: 6, offset: 3}}>
                    <Container id={"container-carousel"}>
                        <Carousel id={"carousel-discover"}>
                            {this.getCards()}
                        </Carousel>
                    </Container>
                </Col>
            </div>
        );
    }
}

export default MovieCarousel;
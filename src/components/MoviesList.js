import React from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {fetchTrendingWeek} from './../services/movies-service'

import './../styles/MoviesList.css'


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class MoviesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newMovies: []
        }
    }

    retrieveWeekMovies() {
        fetchTrendingWeek().then(movies => {
                this.setState({
                    newMovies: movies
                });
                console.log(this.state.newMovies.map((movie,index) => movie));
            }
        ).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.retrieveWeekMovies()
    }

    showMoviesList() {
        return this.state.newMovies.map((movie, id) =>
            <ListGroup.Item action id={"list-item-movie"}>
                <LinkContainer to={`/movie/${movie.id}`}>
                    <Card id={"card-movie-list"}>
                        <Row>
                            <Col md="auto">
                                <Card.Img variant="top" src={IMG_BASE_URL + movie.backdrop_path}
                                          id={"card-movie-list-image"}/>
                            </Col>
                            <Col>
                                <Card.Body id={"card-movie-list-body"}>
                                    <Card.Title id={"card-movie-list-title"}>{id+1}. {movie.title}</Card.Title>
                                    <Card.Subtitle
                                        id={"card-movie-list-subtitle"}>Score: {movie.vote_average}</Card.Subtitle>
                                    <Card.Text id={"card-movie-list-text"}>{movie.overview}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </LinkContainer>
            </ListGroup.Item>
        )
    }

    render() {
        return (
            <Container id={"container-list-movies"}>
                <ListGroup variant="flush" id={"list-group-movie"}>
                    {this.showMoviesList()}
                </ListGroup>
            </Container>
        )
    }

}

export default MoviesList;
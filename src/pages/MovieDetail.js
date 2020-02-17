import React from 'react'
import {fetchMovieDetails} from "../services/movies-service";
import {BackSide, Flippy, FrontSide} from "react-flippy";
import {Card, Col, Container, Row} from "react-bootstrap";

import './../styles/MovieDetail.css'

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class MovieDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: ''
        }
    }

    retrieveMovieDetails(movieId) {
        fetchMovieDetails(movieId).then(movieInfo => {
                this.setState({
                    movie: movieInfo
                });
                console.log(this.state.movie)
            }
        ).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.retrieveMovieDetails(this.props.location.pathname.split("/")[2]);
    }

    showFrontInfo() {
        return (
            <Row>
                <Col md={6}>
                    <Card.Img id="front-image" variant="top" src={IMG_BASE_URL + this.state.movie.poster_path}/>
                </Col>
                <Col md={6}>
                    <Card.Body id={"front-card-body"}>
                        <Card.Title id={"front-card-title"}>
                            {this.state.movie.title}
                        </Card.Title>
                        <Card.Subtitle id={"front-card-subtitle"}>
                            {this.state.movie.tagline}
                        </Card.Subtitle>
                        <Card.Text>
                            <p>
                                {this.state.movie.overview}
                            </p>
                        </Card.Text>

                    </Card.Body>
                </Col>
            </Row>
        )
    }

    showBackInfo() {
        return (
            <Card id="total-card-back">
                <Card.Text id={"back-card-title"}>
                    <p>For more information visit: </p>
                    <a href={this.state.movie.homepage}>{this.state.movie.homepage}</a>
                </Card.Text>
            </Card>
        );
    }


    render() {
        return (
            <div id={"movie-detail-flippy"}>
                <Container>
                    <Flippy
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    >
                        <FrontSide id="flippy-frontside">
                            <Card id="front-card">
                                {this.showFrontInfo()}
                            </Card>
                        </FrontSide>
                        <BackSide id="flippy-backside">
                            {this.showBackInfo()}
                        </BackSide>
                    </Flippy>
                </Container>
            </div>
        );
    }
}

export default MovieDetail;
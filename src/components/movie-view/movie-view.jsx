import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router";
import { Button, Col, Card, Row, } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";


export const MovieView = ({ movies, token, user, setUser }) => {
    // only access the param from the before set path (here in main)
    const { movieId } = useParams();
    const [showSimilarMovies, setShowSimilarMovies] = useState(false);
    // got the whole movies array from main->here look for specific movie user klicked on by id-> then show details about this movie
    const movie = movies.find((m) => m.id === movieId);

    const findSimilarMovies = () => {
        return movies.filter((m) => m.Genre === movie.Genre && m.id !== movie.id);
    };
    return (
        <Row className="justify-content-md-center">

            <Col className="mb-3" key={movie.id} md={3} >
                <Card className="h-100">
                    <Card.Img variant="top" src={movie.ImagePath} className="img-fluid" alt={movie.Title} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>{movie.Description}</Card.Text>

                        <div className="mb-2">
                            <strong>Genre:</strong> {movie.Genre}
                        </div>

                        <div className="mb-2">
                            <strong>Actors:</strong> {movie.Actors}
                        </div>
                        <Link to={`/`} >
                            <Button className="mb-3">Go Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

            {showSimilarMovies && findSimilarMovies().length > 0 ? (
                <>
                    <h2>Similar movies</h2>
                    {findSimilarMovies().map((similarmovie) => (
                        <Col className="mb-3" key={similarmovie.id} md={3} >
                            <MovieCard movie={similarmovie} token={token} user={user} setUser={setUser} />
                        </Col>
                    ))}
                </>
            ) : (
                <Button
                    variant="primary"
                    className="similar-button"
                    onClick={() => setShowSimilarMovies(true)}
                >
                    Don't miss out, see similar movies!
                </Button>
            )}
        </Row>
    )
}

MovieView.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            Title: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
            Genre: PropTypes.string.isRequired,
            Director: PropTypes.string.isRequired,
            ImagePath: PropTypes.string.isRequired,
            Actors: PropTypes.string.isRequired,
        })
    ).isRequired,
};
import { MovieCard } from '../movie-card/movie-card';
import { Col, Row } from "react-bootstrap"

export const MoviesBiography = ({ movies, token, user, setUser }) => {
    // Filter movies with the genre "Drama"

    const dramaMovies = movies.filter(movie => movie.Genre === 'Biography');

    return (
        <Row className="justify-content-center" >
            <h2>Biography Movies</h2>
            <p>Biographical films are a genre that depicts the life of a notable person, real or imagined.</p>

            {dramaMovies.map(movie => (
                <Col className="mb-3" key={movie.id} md={3} >
                    <MovieCard movie={movie} token={token} user={user} setUser={setUser} />
                </Col>
            ))}

        </Row>
    );
};



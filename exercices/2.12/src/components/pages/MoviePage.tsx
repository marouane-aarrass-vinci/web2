import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieCard from "../MovieCard/MovieCard";

const MoviePage = () => {
    const {movies} : MovieContext = useOutletContext();

    //usematch recolte les parametres dynamique construit avec link ds homepage (l'id)
    const match = useMatch("/movies/:id");
    const movieId = Number(match?.params.id);
    if (isNaN(movieId)) return <p>Movie not found</p>;
  
    const movieFound = movies.find((movie) => movie.id === movieId);
    
    if (!movieFound) return <p>Movie not found</p>;

    return (
        <MovieCard movie={movieFound} />
    );
    };

export default MoviePage;
import type { Movie } from "../types";
import MovieItem from "./MovieItem";

interface CinemaProps{
    name:string,
    movies:Movie[];
}

const Cinema = ({name,movies}:CinemaProps) => {
  return (
    <section>
      <h2>{name}</h2>
      {movies.map((movie) => (
        <MovieItem
          key={movie.title}
          title={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </section>
  );
}

 
export default Cinema;
import MovieListView from "../MostListView/MovieListView";
import PageTitle from "../PageTitle/PageTitle";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const { movies }: MovieContext = useOutletContext();

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;

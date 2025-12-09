import { useState } from 'react'
import type { Movie } from '../../types'
import AddMovieForm from '../AddMovieForm';
import"./App.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MovieListView from '../MovieListView/MovieListView';
import PageTitle from '../PageTitle';
const App=()=>{

const defaultMovies:Movie[]=[
{
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    imageUrl: "https://m.media-amazon.com/images/I/51s+qYRVGuL._AC_.jpg",
    description: "Un voleur infiltre les rêves pour dérober des secrets.",
    budget: 160,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
    imageUrl: "https://m.media-amazon.com/images/I/51EbJjlD7-L._AC_.jpg",
    description: "Batman affronte le Joker dans une lutte psychologique intense.",
    budget: 185,
  },
  {
    title: "Avatar",
    director: "James Cameron",
    duration: 162,
    imageUrl: "https://m.media-amazon.com/images/I/41vuB0yKoRL._AC_.jpg",
    description: "Sur Pandora, un soldat humain découvre une nouvelle civilisation.",
    budget: 237,
  },
  {
    title: "Gladiator",
    director: "Ridley Scott",
    duration: 155,
    imageUrl: "https://m.media-amazon.com/images/I/51drJ6hG8yL._AC_.jpg",
    description: "Un général romain trahi devient gladiateur pour se venger.",
    budget: 103,
  },
  {
    title: "Shutter Island",
    director: "Martin Scorsese",
    duration: 138,
    imageUrl: "https://m.media-amazon.com/images/I/51qEdOZ8lRL._AC_.jpg",
    description: "Deux agents enquêtent sur la disparition d’une patiente d’un asile isolé.",
    budget: 80,
  },
];

const [movies,setMovies]= useState(defaultMovies);


const onMovieAdded=(newMovie:Movie)=>{
  console.log("Movie to add:",newMovie);
  setMovies([...movies,newMovie]);
};


return(
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Les films</h1>
        </Header>

        <main className="page-content">
          <PageTitle title="my favorite movies"/>
          <MovieListView movies={movies}/>
          <AddMovieForm onMovieAdded={onMovieAdded}/>
          
        <br /><br /><br /><br />
        </main>
      <Footer urlLogo='https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4='>
      <p>@ myMovies</p>
      </Footer>
    </div>

);

};

export default App;


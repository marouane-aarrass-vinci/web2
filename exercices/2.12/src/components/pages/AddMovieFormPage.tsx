import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import PageTitle from "../PageTitle/PageTitle";
import AddMovieForm from "../AddMovieForm/AddMovieForm";


const AddMovieFormPage = ()=> {
    const { onMovieAdded } : MovieContext=useOutletContext();
    return(
 <div>
        <PageTitle title="Add a movie en bas la"/>
         <AddMovieForm onMovieAdded={onMovieAdded}/>
    <br />
    <br />
    <br />
    <br />
    
    </div>
    );
   };

export default AddMovieFormPage;
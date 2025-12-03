import  { useState } from "react";
import type { SyntheticEvent } from "react";
import type { Movie } from "../types";
import "./AddMovieForm.css";

interface AddMovieFormProps {
  onMovieAdded: (movie: Movie) => void;
}

//onmovieadded sert a envoyer le nouveau film a add au parent
const AddMovieForm = ({ onMovieAdded }: AddMovieFormProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onMovieAdded({ title, director, duration, imageUrl, description, budget });
    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          //a chaque fois qu'on ecrit, title prends la valeur du input grace a la methode setTitle  
          //OnChange detecte qu'un event arrive dans le code et avec e.target.value on recupere la valeur de celui ci
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Réalisateur :</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Durée :</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label>URL de l'image :</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget:</label>
            <input
            type="number"
            value={budget}
            onChange={(e)=> setBudget(parseInt(e.target.value))}
            />
      </div>
      <button type="submit">Ajouter</button>
     </form>
  );
};

export default AddMovieForm;
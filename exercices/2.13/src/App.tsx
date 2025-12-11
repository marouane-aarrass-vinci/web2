import { useEffect, useState } from "react";

/**
 * appeler une api externe (jokeapi)
 * recuperer une blague au format json
 *  afficher la categorie et le texte
 */

interface Joke {
  joke: string;
  category: string;
}


const App = () => {
  //on stock la joke dans un state react
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  /**
   * Mon useEffect contient deux arguments
   * 1er une fonction (fetch et deux then) : ce sont les fonctions que react executera apres avoir affiché mon composant
   * le code de useEffect ne s'execute pas pendant le rendu, seulement apres que react ait fini d'afficher la page
   * 
   * 2e un tab de dependances
   * Exécute la fonction du useEffect une seule fois, juste après le premier affichage du composant
   */
  
  useEffect(() => {
    //fetch va chercher des données sur une api via une requete http et renvoie une promise contenant un object Reponse
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        //reponse.json renvoie encore une promise
        return response.json();
      })
      //le deuxieme then est appelé lorsque la conversion jsonn est terminé
      .then((data) => {
        setJoke({
          joke: data.joke ?? "No joke found",
          category: data.category ?? "Unknown",
        });
      });
  }, []);

  
  if (!joke) {
    return <p>Loading...</p>;
  }


  //ce que renvoie notre composant app
  return (
    <div>
      <h3>Random joke</h3>
      <h4>{joke.category}</h4>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>{joke.joke}</p>
      </blockquote>
      <p>
        <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </div>
  );
};

export default App;

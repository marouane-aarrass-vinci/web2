import { Router } from "express";
import { Film } from "../types";
import { newFilm } from "../types";
import { isFilm } from "../utils/type-guards";
import path from "node:path";
import { serialize,parse } from "../utils/json";
const jsonDbPath = path.join(__dirname,"/../data/films.json");




console.log("Films router chargé");
const router =Router();



  const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160000000,
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      imageUrl: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      budget: 63000000,
      description: "A computer hacker learns about the true nature of his reality.",
      imageUrl: "https://example.com/matrix.jpg"
    },{
     id: 3,
      title: "The Man",
      director: "ronaldo, messi",
      duration: 136,
      budget: 6300000,
      description: "A computer hacker learns about the true nature of his reality.",
      
    }
  ];
  

router.get("/error", (_req, _res, _next) => {
  throw new Error("This is an error");
  // equivalent of next(new Error("This is an error"));
});

/**
 * Read all the films from the menu
 */

router.get("/", (req, res) => {
  const films =parse(jsonDbPath,defaultFilms);

//filter in the duration
  if (!req.query["minimum-duration"]){
    return res.json(films);
  }
    const minimumDuration = Number(req.query["minimum-duration"]);

     if (isNaN(minimumDuration)){
      return res.status(400).send("must be a number");
  } 

  if (minimumDuration <= 0){
       return res.status(400).send("must be positive number");
       
  } 

 const filter= films.filter((film) => film.duration >= minimumDuration);

  return res.status(200).json(filter);
  }


);

/**
 * GET film by id
 */

router.get("/:id",(req,res)=>{
  const id =Number(req.params.id );

  if(isNaN(id)){
    return res.status(400).send('bad request');
  }
  const films =parse(jsonDbPath,defaultFilms);

  const film = films.find((film)=>film.id ===id );

  if  (!film){
    return res.status(404).send('film not found');
  }
  return res.status(200).json(film);

});
/**
 * create a film
 */

router.post("/",(req,res)=>{

  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("description" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string"
   ) {
    return res.sendStatus(400).send('bad film data');
  }
  
  const { title , director , duration , budget ,description , imageUrl} = body as newFilm;
  if  (!title || !director || !duration || !budget || !description || !imageUrl){
    return res.status(400).send('bad  film data');
  }
  const films =parse(jsonDbPath,defaultFilms);
  const conflict = defaultFilms.some(
    (f)=> f.title === title && f.director === director
  );

  if(conflict){
    return res.status(409).send("film already exists");
  }

  const nextId = 
  defaultFilms.reduce((maxId, film) =>(film.id>maxId ? film.id : maxId),0 )+1;

  const newFilm: Film={

  id:nextId,
  title,
  director,
  duration,
  budget,
  description,
  imageUrl,
  };

 

  defaultFilms.push(newFilm);
  serialize(jsonDbPath,films);
  return res.status(201).json(newFilm);
});

/**
 * Delete a movie
 */

router.delete("/:id",(req,res)=>{
  const id = Number(req.params.id);
   const films =parse(jsonDbPath,defaultFilms);

  if(isNaN(id)){
    return res.status(400).send("must be a id");
  }

  const index =defaultFilms.findIndex((film)=>film.id===id);
  
  if(index===-1){
    return res.status(404).send("film not found");
  }

  defaultFilms.splice(index,1);
  serialize(jsonDbPath,films);

  return res.sendStatus(204);
});

/**
 * Patch films
 */
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).send("must be a valid id");
   const films =parse(jsonDbPath,defaultFilms);

  const film = films.find(f => f.id === id);
  if (!film) return res.status(404).send("movie not found");

  const body: unknown = req.body;
  if (!body || typeof body !== "object") return res.status(400).send("bad film data");

  const b = body as Partial<Film>; 

  if (
    (b.title !== undefined && typeof b.title !== "string") ||
    (b.director !== undefined && typeof b.director !== "string") ||
    (  typeof b.duration !== "number" || b.duration<=0) ||
    ( typeof b.budget !== "number" || b.budget<=0) ||
    (b.description !== undefined && typeof b.description !== "string") ||
    (b.imageUrl !== undefined && typeof b.imageUrl !== "string") 

    
  ) {
    return res.status(400).send("bad film data");
  }

  if (b.title !== undefined) film.title = b.title;
  if (b.director !== undefined) film.director = b.director;
  if (b.duration !== undefined) film.duration = b.duration;
  if (b.budget !== undefined) film.budget = b.budget;
  if (b.description !== undefined) film.description = b.description;
  if (b.imageUrl !== undefined) film.imageUrl = b.imageUrl;
  serialize(jsonDbPath,films);

  return res.json(film);
});

/**
 * Put films
 */
router.put("/:id",(req,res)=>{
  const id = Number(req.params.id);

  if(isNaN(id)){
    return res.status(400).send("must be a id");
  }
   const films =parse(jsonDbPath,defaultFilms);
    const filmIndex = films.findIndex(f => f.id === id);
  if (filmIndex===-1) return res.status(404).send("movie not found");

  const body: unknown = req.body;
 


  if(!isFilm(body)){
    return res.sendStatus(400);
  }


  const updatedFilm:Film ={
    id,
    title:body.title,
    director:body.director,
    duration:body.duration,
    budget:body.budget,
    description:body.description,
    imageUrl:body.imageUrl,

  };

  films[filmIndex] = updatedFilm;
  serialize(jsonDbPath,films);
  return res.json(updatedFilm);

  


  

});

export default router;
import { Router } from "express";
import { Film } from "../types";
import { newFilm } from "../types";




console.log("Films router chargé");
const router =Router();



  const films: Film[] = [
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

  let result = films;

//filter in the duration
  if (req.query["minimum-duration"]){

    const minimumDuration = Number(req.query["minimum-duration"]);

     if (isNaN(minimumDuration)){
      return res.status(400).send("must be a number");
  } 

  if (minimumDuration <= 0){
       return res.status(400).send("must be positive number");
       
  } 

 result = result.filter((film) => film.duration >= minimumDuration);
 }

 // filter in the first characther
 if(req.query.start && typeof req.query.start ==="string"){
  const start = req.query.start;

  result=result.filter((film)=>
    film.title.startsWith(start)
  );
 }

 if(req.query.sort ==='duration'){
    result =[...result].sort((a,b)=>a.duration -b.duration);
 }

  return res.status(200).json(result);


});

/**
 * GET film by id
 */

router.get("/:id",(req,res)=>{
  const id =Number(req.params.id );

  if(isNaN(id)){
    return res.status(400).send('bad request');
  }

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

  const nextId = 
  films.reduce((maxId, film) =>(film.id>maxId ? film.id : maxId),0 )+1;

  const newFilm: Film={

  id:nextId,
  title,
  director,
  duration,
  budget,
  description,
  imageUrl,
  };

  if(body.title ==newFilm.title || body.director === newFilm.director){
    return res.status(409).send('this film is already exist');
  }

  films.push(newFilm);
  return res.status(201).json(newFilm);
});

export default router;
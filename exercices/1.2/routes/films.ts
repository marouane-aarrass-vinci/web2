import {Router} from "express";
import { Film } from "../types";
import path from "node:path";
import { parse } from "../utils/json";


console.log("Films router chargé");
const router =Router();


const jsonDbPath = path.join(__dirname, "/../data/films.json");
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

router.get("/",(req, res)=>{
    if(req.query.order && typeof req.query.order !=="string"){
        return res.sendStatus(400);
     }

     const orderByTitle=
     typeof req.query.order === "string" && req.query.order.includes("title")
     ?req.query.order
     :undefined;

    let orderedMenu: Film[]= [];
    const films = parse(jsonDbPath,defaultFilms);
    if(orderByTitle)
        orderedMenu = [...films].sort((a,b) => a.title.localeCompare(b.title));
    if(orderByTitle === "-title") orderedMenu = orderedMenu.reverse();
    return res.json(orderedMenu.length ===0 ? films : orderedMenu);
});

export default router;
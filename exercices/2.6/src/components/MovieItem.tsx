 import { useState } from "react";

interface movieItemProps{
    title:string;
    director:string;
    description:string;
}

function MovieItem({title,director,description}:movieItemProps){
    const [showDescription,setShowDescription]= useState(false);

    return(
        <div onClick={()=>setShowDescription(!showDescription)}>
            <h3>{title}</h3>
            <p>{director}</p>
            {showDescription && <p>{description}</p>}
        </div>
    );
}

export default MovieItem
 import { useState } from "react";

interface movieItemProps{
    title:string;
    director:string;
    description:string;
}
function MovieItem({title, director, description}: movieItemProps){
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div >
            <p onClick={() => setShowDescription(!showDescription)}>
               <strong>{title}</strong> 
            </p>
            <p> Realisateur : {director}</p>
            {showDescription && <p>{description}</p>}
        </div>
    );
}


export default MovieItem
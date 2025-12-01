import { useState } from "react";

interface ClickCounterTitle {
  title: string;
  message:string;
  messageClick:string;
}

//on fait la destructuration pour ne pas repeter .props
function ClickCounter({ title,message,messageClick}: ClickCounterTitle) {
  //on crée nos deux etats qui sont des variables qui changeront l'interface de maniere dynamique
  //0 est la valeur de count
  const [count, setCount] = useState(0);
  //sert a gerer l'affichage du message en verifiant quand la souris du user est sur le bouton
  const [isOnCount,setOnCount] =useState(false);

  return (
    /*
    on dit si title n'est pas vide, afficher le props {}
    puis quand isOnCount est true afficher le props message
    puis avec la balise button on crée un bouton
    onClick appelle notre fonction fonction qui appelle setCount
    */
    <div> 
      {title && <p>{title}</p>}
      {isOnCount && <p>{messageClick}</p>}
      <button onClick={() => setCount((count) => count + 1)}
      
        onMouseEnter={() =>setOnCount(true)}
        onMouseLeave ={() =>setOnCount(false)}
        >
          count is {count}
      </button>
       {count>=10 && <p>{message}</p>}
    </div>
  );
}

export default ClickCounter;

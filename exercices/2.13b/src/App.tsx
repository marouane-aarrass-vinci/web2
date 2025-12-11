import { useState } from "react";
import RandomDog from "./RandomDog";


const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <RandomDog key={`${refresh}1`} />
        <RandomDog key={`${refresh}2`} />
        <RandomDog key={`${refresh}3`} />
      </div>

      <button
      //quand un state react change de valeur, tout l'app se relance et et ca permet qu'a chaque clique ca relance
        onClick={() => setRefresh(!refresh)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "2em",
          cursor: "pointer",
        }}
      >
        Refresh Dogs
      </button>
    </>
  );
};

export default App;

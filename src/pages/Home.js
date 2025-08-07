import React from "react"; 
import OpeningCard from "../components/OpeningCard";  
import { useSelector } from "react-redux"; 




function Home() { 
    const openings = useSelector((state) => state.openings.list); 
      
    
    return(
        <>
        <div>
            <h1>Benvenuti nella Pagina WebScacchi3.0! </h1> 
            <h2>Qui potrai provare le tue aperture in modo da allenarti per le tue prossime partite su Chess.com !! </h2> 
            <div className="grid">
                {openings.map((opening) => ( 
                    <OpeningCard key={opening.id} opening={opening} />
                ))}
            </div>
        </div>
        </>
    ); 
}

export default Home; 
 


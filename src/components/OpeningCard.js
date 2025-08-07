import { Link } from "react-router-dom"; 


const OpeningCard = ({opening}) =>  (  
    <Link to={`/openings/${opening.id}`}>
    <div className="border p-4 hover:bg-gray-100"> 
    <h2>{opening.name}</h2>
    <p>{opening.moves}</p>
  </div> 
  </Link>
); 

export default OpeningCard;   






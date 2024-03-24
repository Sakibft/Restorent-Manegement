import { useEffect, useState } from "react";
import Scard from "./Scard";

 

const Cards = ({handleWantTocok}) => {
  const [cards, setCard] = useState([]);
  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res=>res.json())
    .then(data=>setCard(data))
  }, [])
  
  
  return (
    // <div className="grid lg:grid-cols-2 gap-6">
    <div className="grid lg:grid-cols-2 gap-x-9 gap-y-2">
       {cards.map((card)=>(
          <Scard 
          key={card.id} 
          card={card}
          handleWantTocok={handleWantTocok}
          >
          </Scard>
        ))}
      
    </div>
  );
};

export default Cards;
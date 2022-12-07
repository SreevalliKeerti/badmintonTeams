import { useState } from "react"; 


function Card({ card }) {    
  const [isFlipped,setFlipped]=useState(false);
  const flip = () => {
    setFlipped(!isFlipped);
  }  


    return (
          <div className="col-3">
            <div onClick={flip} className={"card-container" + (isFlipped ? " flipped" : "")}> 
              <div className="front">
                <p>{card.front}</p>
              </div>
              <div className="back" id="canvas">               
                <p>{card.back}</p>                    
              </div>
            </div>
          </div>
    );
}

export default Card;
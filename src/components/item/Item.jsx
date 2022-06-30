import "./item.css";
import { useState } from "react";

const Item = ({card}) => {
    const {name,img,options}=card;
    const [content,setContent]=useState(true);

    setTimeout(()=>{
      setContent(true)
    },3000);
    
  return (
    <div className="card" onClick={()=>setContent(!content)}>
      {content ? 
      (<div className="imgDiv">
        <img className="cardImg" src={img} alt="" />
        <h3 className="cardTitle">{name}</h3>
      </div>)
      :
      (<div className="info">
        {
        options.map((item)=>{
          return(
            <ul>
              <li className="list">{item}</li>
            </ul>
          )
        })
        }
      </div>)}
    </div>
  )
}

export default Item
import "./card.css";
import {languages} from "../helper/data";
import Item from "../item/Item"


const Card = () => {
  return (
    <main className="main-container">
      <div className="strip"></div>
      <h1 className="title">LANGUAGES</h1>
      <div className="card-container">
        {languages.map((item)=>{
          return (
            <Item card={item}/>
          )
        })}
      </div>
    </main>
  )
}

export default Card
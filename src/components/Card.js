import {useState, useEffect} from "react";
import api from '../utils/Api.js';

function Card(){

    const [cards, setNewCards] = useState([]);

    useEffect(() => {
    api.getInitialCards()
    .then((data) => {
        const results = data.map((element) => ({
            id: element._id,
            name: element.name,
            link: element.link,
            likesQuantity: element.likes.length
        }))
        console.log(results)
        setNewCards(results);
    })
    .catch((err) => console.error(err))
    }, [])

    return (
        cards.map((card) => 
        (<article className="element" key={card.id}>
        <img className="element__photo" src={card.link} />
        <div className="element__info">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__containerLike">
            <button type="button" className="element__like"></button>
            <span className="element__likesQuantity">{card.likesQuantity}</span>
          </div>
        </div>
        <button type="reset" className="element__delete"></button>
      </article>)
      ))
      
}

export default Card;
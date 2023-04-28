function Card({ name, link, likesQuantity }){
    return (
        <article className="element">
        <img className="element__photo" src={link} alt={name} />
        <div className="element__info">
          <h2 className="element__name">{name}</h2>
          <div className="element__containerLike">
            <button type="button" className="element__like"></button>
            <span className="element__likesQuantity">{likesQuantity}</span>
          </div>
        </div>
        <button type="reset" className="element__delete"></button>
      </article>
      )   
}

export default Card;
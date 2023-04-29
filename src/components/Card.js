function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="element__info">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__containerLike">
          <button type="button" className="element__like"></button>
          <span className="element__likesQuantity">
            {props.card.likesQuantity}
          </span>
        </div>
      </div>
      <button type="reset" className="element__delete"></button>
    </article>
  );
}

export default Card;

function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form">
          {props.children}
        </form>
        <button className="popup__close" type="reset" onClick={props.onClose} />
      </div>
    </section>
  );
}

export default PopupWithForm;

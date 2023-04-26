function PopupWithForm(props){
    return (
        <section className={`popup popup_${props.name}`}>
          <div className="popup__container">
            <h2 className="popup__title">{props.title}</h2>
              <form className="popup__form" name={props.name} noValidate="">
                {props.children}
              </form>
            <button className="popup__close" type="reset" />
          </div>
        </section>
    )
}

export default PopupWithForm;


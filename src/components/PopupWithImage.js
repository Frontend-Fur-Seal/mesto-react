function PopupWithImage(){
    return (
      <section className="popup popup_full-img">
        <div className="popup__container popup__container_full-img">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="" />
            <figcaption className="popup__figcaption" />
          </figure>
          <button className="popup__close" type="reset" />
        </div>
    </section>
    )
}

export default PopupWithImage;
import hoverAvatar from "./images/Avatar.svg";

function App() {
  return (
    <div className="App">
  <header className="header">
    <div className="header__logo" />
  </header>
  <main className="content">
    <section className="profile">
      <div className="profile__avatar-container">
        <img
          src={hoverAvatar}
          alt="изменить аватар"
          className="profile__avatar-hover"
        />
        <img alt="фотография профиля" className="profile__avatar" />
      </div>
      <div className="profile__info">
        <h1 className="profile__name" />
        <button type="button" className="profile__button-name-change" />
        <p className="profile__occupation" />
      </div>
      <button type="button" className="profile__button-add-place" />
    </section>
    <section className="elements"></section>
  </main>
  <footer className="footer">
    <p className="footer__copyright">© 2020 Mesto Russia</p>
  </footer>
  <section className="popup popup_name-change">
    <div className="popup__container">
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form" name="persDetails" noValidate="">
        <div className="popup__input-wrap">
          <input
            required=""
            minLength={2}
            maxLength={40}
            type="text"
            className="popup__input popup__content popup__content_type_name"
            name="popup__content_type_name"
            id="name-input"
          />
          <span className="popup__message-error name-input-error" />
        </div>
        <div className="popup__input-wrap">
          <input
            required=""
            minLength={2}
            maxLength={200}
            type="text"
            className="popup__input popup__content popup__content_type_occupation"
            name="popup__content_type_occupation"
            id="occupation-input"
          />
          <span className="popup__message-error occupation-input-error" />
        </div>
        <button type="submit" className="popup__submit">
          Сохранить
        </button>
      </form>
      <button className="popup__close" type="reset" />
    </div>
  </section>
  <section className="popup popup_add-place">
    <div className="popup__container">
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__form" name="addPlace" noValidate="">
        <div className="popup__input-wrap">
          <input
            required=""
            minLength={2}
            maxLength={30}
            type="text"
            className="popup__input popup__content popup__content_type_name-place"
            name="popupPlaceName"
            placeholder="Название"
            id="name-place-input"
          />
          <span className="popup__message-error name-place-input-error" />
        </div>
        <div className="popup__input-wrap">
          <input
            required=""
            type="url"
            className="popup__input popup__content popup__content_type_link"
            name="popupPlaceLink"
            placeholder="Ссылка на картинку"
            id="link-input"
          />
          <span className="popup__message-error link-input-error" />
        </div>
        <button type="submit" className="popup__submit">
          Создать
        </button>
      </form>
      <button className="popup__close" type="reset" />
    </div>
  </section>
  <section className="popup popup_avatar-change">
    <div className="popup__container">
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form" name="avatarChange" noValidate="">
        <div className="popup__input-wrap">
          <input
            required=""
            type="url"
            className="popup__input popup__content popup__content_type_avatar-link"
            placeholder="Ссылка на аватар"
            name="popupAvatarLink"
            id="avatar-link-input"
          />
          <span className="popup__message-error avatar-link-input-error" />
        </div>
        <button type="submit" className="popup__submit">
          Сохранить
        </button>
      </form>
      <button className="popup__close" type="reset" />
    </div>
  </section>
  <section className="popup popup_delete-agree">
    <div className="popup__container popup__container_delete-agree">
      <h2 className="popup__title">Вы уверены?</h2>
      <button type="submit" className="popup__submit">
        Да
      </button>
      <button className="popup__close" type="reset" />
    </div>
  </section>
  <section className="popup popup_full-img">
    <div className="popup__container popup__container_full-img">
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="" />
        <figcaption className="popup__figcaption" />
      </figure>
      <button className="popup__close" type="reset" />
    </div>
  </section>
  <template id="element-template" />
    </div>
  );
}

export default App;

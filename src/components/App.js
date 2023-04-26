import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

  <PopupWithForm name="name-change" title="Редактировать профиль">
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
  </PopupWithForm>
  <PopupWithForm name="add-place" title="Новое место">
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
  </PopupWithForm>
  <PopupWithForm name="avatar-change" title="Обновить аватар">
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
  </PopupWithForm>
  <PopupWithImage />
  <template id="element-template" />
    </div>
  );
}

export default App;

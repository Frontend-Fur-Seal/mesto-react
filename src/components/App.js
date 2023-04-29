import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";
import { useState } from "react";

const App = () => {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAddPlacePopupOpen, setIsEditAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [isSelectedCard, setIsSelectedCard] = useState({name: '', link: ''});

  function handleCardClick(card) {
    setIsSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsEditAddPlacePopupOpen(!isEditAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsSelectedCard({name: '', link: ''});
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={setIsSelectedCard}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        isOpen={isEditAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Создать'}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}
      >
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
      </PopupWithForm>
      <ImagePopup card={isSelectedCard} onClose={closeAllPopups} />
    </div>
  );
};

export default App;

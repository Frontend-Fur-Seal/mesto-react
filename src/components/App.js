import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import {useState, useEffect} from "react";

const App = () => {

  const [ProfilePopupOpen, isEditProfilePopupOpen] = useState(false);
  const [AddPlacePopupOpen, isEditAddPlacePopupOpen] = useState(false);
  const [AvatarPopupOpen, isEditAvatarPopupOpen] = useState(false);

  const [SelectedCard, setSelectedCard] = useState(false);

  function handleCardClick(card){
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    isEditProfilePopupOpen(!ProfilePopupOpen); 
  }

  function handleAddPlaceClick(){
    isEditAddPlacePopupOpen(!AddPlacePopupOpen); 
  }

  function handleEditAvatarClick() {
    isEditAvatarPopupOpen(!AvatarPopupOpen); 
  }

  function closeAllPopups(){
    isEditProfilePopupOpen(false);
    isEditAddPlacePopupOpen(false);
    isEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="App">
      <Header />
      <Main onEditAvatar = {handleEditAvatarClick} onAddPlace = {handleAddPlaceClick} onEditProfile = {handleEditProfileClick} 
      onCardClick = {setSelectedCard}/>
      <Footer />

  <PopupWithForm title="Редактировать профиль" isOpen={ProfilePopupOpen} onClose={closeAllPopups}>
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
  <PopupWithForm title="Новое место" isOpen={AddPlacePopupOpen} onClose={closeAllPopups}>
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
  <PopupWithForm title="Обновить аватар" isOpen={AvatarPopupOpen} onClose={closeAllPopups}>
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
  <ImagePopup card = {SelectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import { useState, useEffect } from "react";
import api from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js"
import EditAvatarPopup from "./EditAvatarPopup.js";

const App = () => {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAddPlacePopupOpen, setIsEditAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [cards, setNewCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        const results = data.map((element) => ({
          _id: element._id,
          name: element.name,
          link: element.link,
          likes: element.likes,
          owner: element.owner 
        }));
        setNewCards(results);
      })
      .catch((err) => console.error(err));
  }, []);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getInitialUser()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => console.error(err));
  }, []);

  const [isSelectedCard, setIsSelectedCard] = useState({name: '', link: ''});

  function handleCardClick(card) {
    setIsSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
     setNewCards((state) => state.map((c) => c._id === card._id ? newCard : c))
    })
    .catch((err) => console.error(err));

} 

function handleCardDelete(card){
  api.cardDelete(card._id)
  .then(() => {
    setNewCards((state) => state.filter(c => c._id != card._id))
  })
  .catch((err) => console.error(err));
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

  function handleUpdateUser({name, about}){
    api.postInitialUser({name, about})
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => console.error(err));
    closeAllPopups();
  }

  function handleAddPlaceSubmit({name, link}){
    api.postInitialCard({name, link})
    .then((newCard) => {
      setNewCards([newCard, ...cards]); 
    })
    .catch((err) => console.error(err));
    closeAllPopups();
  }

  function handleUpdateAvatar({avatar}){
    api.postInitialUserAvatar({avatar})
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => console.error(err));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
        onCardLike = {handleCardLike}
        onCardDelete = {handleCardDelete}
        cards={cards}
      />
      <Footer />
      <EditProfilePopup 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups} 
      onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup 
      isOpen={isEditAddPlacePopupOpen} 
      onClose={closeAllPopups} 
      onLoadedPlace={handleAddPlaceSubmit}
      />
      <EditAvatarPopup 
      isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups} 
      onUpdateAvatar={handleUpdateAvatar}
      />
      <ImagePopup card={isSelectedCard} onClose={closeAllPopups} />
    </div>
    </CurrentUserContext.Provider>
  );
};

export default App;

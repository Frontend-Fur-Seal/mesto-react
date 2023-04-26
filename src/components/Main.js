import hoverAvatar from "../images/Avatar.svg";

function Main(){

  function handleEditAvatarClick(){
    const popupAvatarChange = document.querySelector('.popup_avatar-change');
    popupAvatarChange.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popupNameChange = document.querySelector('.popup_name-change');
    popupNameChange.classList.add('popup_opened');
  }

  function handleAddPlaceClick(){
    const popupAddPlace = document.querySelector('.popup_add-place');
    popupAddPlace.classList.add('popup_opened');
  }

    return (
      <main className="content">
        <section className="profile">
          <div 
          className="profile__avatar-container"
          onClick={handleEditAvatarClick}>
            <img
              src={hoverAvatar}
              alt="изменить аватар"
              className="profile__avatar-hover"
            />
            <img alt="фотография профиля" className="profile__avatar" />
          </div>
        <div className="profile__info">
          <h1 className="profile__name" />
          <button 
          type="button" 
          className="profile__button-name-change"
          onClick={handleEditProfileClick} 
          />
          <p className="profile__occupation" />
        </div>
        <button 
        type="button" 
        className="profile__button-add-place" 
        onClick={handleAddPlaceClick} 
        />
        </section>
        <section className="elements"></section>
      </main>
    )
}

export default Main;
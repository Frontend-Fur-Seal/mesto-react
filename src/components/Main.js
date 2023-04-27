import React from "react";
import hoverAvatar from "../images/Avatar.svg";
import api from '../utils/Api.js';

function Main(props){

  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  React.useEffect(() => {
    api.getInitialUser()
    .then((data) => {
      setUserAvatar(data.avatar);
      setUserName(data.name);
      setUserDescription(data.about)
    })
  }, []);

    return (
      <main className="content">
        <section className="profile">
          <div 
          className="profile__avatar-container"
          onClick={props.onEditAvatar}>
            <img
              src={hoverAvatar}
              alt="изменить аватар"
              className="profile__avatar-hover"
            />
            <img 
            alt="фотография профиля" 
            className="profile__avatar"
            src={userAvatar} />
          </div>
        <div className="profile__info">
          <h1 className="profile__name">
            {userName}
          </h1>
          <button 
          type="button" 
          className="profile__button-name-change"
          onClick={props.onEditProfile} 
          />
          <p className="profile__occupation">
            {userDescription}
          </p>
        </div>
        <button 
        type="button" 
        className="profile__button-add-place" 
        onClick={props.onAddPlace} 
        />
        </section>
        <section className="elements"></section>
      </main>
    )
}

export default Main;
import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-introduction">
          <h1 className="profile-introduction__heading heading-primary">
            Intro
            <span className="line-break">duction</span>
          </h1>
          <p className="text">My name is Kiet.</p>
          <p className="text">
            I am a front-end developer, who passionated to build useful and
            enjoyable experiences for the web and beyond.
          </p>
          <p className="text">
            Please feel free to check out some projects I've been working
            on.
          </p>
        </div>

        <div className="profile__navigation">
          <a className="profile__navigation-link link" href="#">
            &#9655;
          </a>

          <p className="text profile__navigation-text">
            01 <span>/03</span>
          </p>

          <a className="profile__navigation-link link" href="#">
            &#9665;
          </a>
        </div>
        
        <span className="text-position-bottom-left">Profile</span>
      </div>
    );
  }
}

export default Profile;
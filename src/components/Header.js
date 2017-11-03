import React, { Component } from 'react';
class Header extends Component {
  render() {
    return <div className="header">
        <div className="greeting">
          <div className="greeting__avatar">&nbsp;</div>

          <div className="greeting__arrow-left">&nbsp;</div>

          <h2 className="greeting__heading heading-secondary">
            Hello,
            <span className="line-break">my name</span>
            <span className="line-break">is Kiet</span>
          </h2>
        </div>

        <div className="greeting__navigation">
          <p className="greeting__navigation-text">View profile</p>
          <button className="greeting__navigation-button">
            <a className="greeting__navigation-link link" href="#">
              &#9655;
            </a>
          </button>
        </div>
      </div>;
  }
}

export default Header;
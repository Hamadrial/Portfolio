import React, { Component } from 'react';
import '../css/main.css';

// Components
import Header from './Header';
import Profile from "./Profile";
import Work from "./Work";
import Contact from "./Contact";


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="app-navbar">
          <div className="container navbar__container">
            <div className="navbar-brand">
              <h1 className="navbar__heading heading-primary">
                <a href="#" className="link navbar__link">
                  Kiet <br /> Nguyen
                </a>
              </h1>
            </div>

            <ul className="navbar__list">
              <li className="navbar__list-item">
                <a href="#" className="link navbar__link">
                  Home
                </a>
              </li>

              <li className="navbar__list-item">
                <a href="#" className="link navbar__link">
                  Profile
                </a>
              </li>

              <li className="navbar__list-item">
                <a href="#" className="link navbar__link">
                  Work
                </a>
              </li>

              <li className="navbar__list-item">
                <a href="#" className="link navbar__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <header>
          <Header />
        </header>

        <section>
          <Profile />
        </section>

        <section>
          <Work />
        </section>

        <section>
          <Contact />
        </section>
      </div>
    );
  }
}

export default App;

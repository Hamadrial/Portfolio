import React, { Component } from "react";
import natours from "../img/natours.png";
import IconSearch from "./IconSearch";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="work-projects">
          <div className="work-projects__item">
            
            <div className="item__picture">
              <img src={natours} alt="Natours project" className="image" />
              <div className="overlay">
                <IconSearch width="50" height="50" searchfill="#fff" />
              </div>
            </div>

            <h1 className="item__heading">Natours</h1>
            <p className="item__description ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="work-projects__item">
            <div className="item__picture">
              <img src={natours} alt="Natours project" className="image" />
              <div className="overlay">
                <IconSearch width="50" height="50" searchfill="#fff" />
              </div>
            </div>

            <h1 className="item__heading">Natours</h1>
            <p className="item__description ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="work-projects__item">
            <div className="item__picture">
              <img src={natours} alt="Natours project" className="image" />
              <div className="overlay">
                <IconSearch width="50" height="50" searchfill="#fff" />
              </div>
            </div>

            <h1 className="item__heading">Natours</h1>
            <p className="item__description ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="work-projects__item">
            <div className="item__picture">
              <img src={natours} alt="Natours project" className="image" />
              <div className="overlay">
                <IconSearch width="50" height="50" searchfill="#fff" />
              </div>
            </div>

            <h1 className="item__heading">Natours</h1>
            <p className="item__description ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="work-projects__item">
            <div className="item__picture">
              <img src={natours} alt="Natours project" className="image" />
              <div className="overlay">
                <IconSearch width="50" height="50" searchfill="#fff" />
              </div>
            </div>

            <h1 className="item__heading">Natours</h1>
            <p className="item__description ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="work-projects__item">
            <div className="item__picture">
              <img src={natours} alt="Natours project" className="image" />
              <div className="overlay">
                <IconSearch width="50" height="50" searchfill="#fff" />
              </div>
            </div>

            <h1 className="item__heading">Natours</h1>
            <p className="item__description ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;

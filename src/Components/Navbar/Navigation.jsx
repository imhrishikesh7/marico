import React from 'react';
import './Navigation.css'; // Make sure to create a corresponding CSS file or adjust the path accordingly

const Navigation = () => {
  return (
    <>
      {/* Background Strip Container */}
      <div className="navigation-background">
      <img src="./homepage/logo.svg" className='marico-logo' alt="Logo" />
        {/* Navigation Container */}
        <div className="navigation">
          <input type="checkbox" id="navi-toggle" className="navigation__checkbox" />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">
              <span className="navigation__icon-span">&nbsp;</span>
              <span className="navigation__icon-span">&nbsp;</span>
              <span className="navigation__icon-span">&nbsp;</span>
            </span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">About Natours</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Your Benefits</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Popular Tours</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Stories</a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">Book Now</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;

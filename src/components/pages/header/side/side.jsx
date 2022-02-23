import React from 'react';
import { NavLink } from 'react-router-dom';

import redRunes from '../../../img/header/red_runes.svg';
import lighting from '../../../img/header/lighting.svg';
import blueRunes from '../../../img/header/blue_runes.svg';

export const Side = ({ ratingResponse }) => {
  let darkSideWidth =
    ratingResponse.dark_side.score /
    ((ratingResponse.dark_side.score + ratingResponse.bright_side.score) / 100);

  return (
    <div className="header__side">
      <div className="header__sidelink red">
        <NavLink to="/">
          <img
            className="usericon"
            src={`http://80.249.146.66:81/${ratingResponse.bright_side.best_user.image}`}
            alt=""
          />
          <img className="redrune" src={redRunes} alt="" />
        </NavLink>
      </div>
      <div
        className="header__confront-scale"
        style={{ gridTemplateColumns: `${darkSideWidth}% 12px auto` }}>
        <div className="experience experience-red">
          <p>{ratingResponse.dark_side.score}</p>
        </div>
        <div className="lighting-img">
          <img className="lighting" src={lighting} alt="" />
        </div>
        <div className="experience experience-blue">
          <p>{ratingResponse.bright_side.score}</p>
        </div>
      </div>
      <div className="header__sidelink blue">
        <NavLink to="/">
          <img className="bluerune" src={blueRunes} alt="" />
          <img
            className="usericon"
            src={`http://80.249.146.66:81/${ratingResponse.dark_side.best_user.image}`}
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

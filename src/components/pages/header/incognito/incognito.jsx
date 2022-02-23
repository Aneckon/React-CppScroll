import React from 'react';

import ninjaBlue from '../../../img/header/ninja-blue.svg';
import ninjaRed from '../../../img/header/ninja-red.svg';
import ninjaRedWidthBlueBandage from '../../../img/header/ninjaRedWidthBlueBandage.svg';
import ninjaBlueWidthRedBandage from '../../../img/header/ninjaBlueWidthRedBandage.svg';

export const Incognito = ({ side, userResponse, setSide }) => {
  const headerImageNinjaSide = !side
    ? !userResponse.user.side
      ? ninjaRed
      : ninjaBlueWidthRedBandage
    : userResponse.user.side
    ? ninjaBlue
    : ninjaRedWidthBlueBandage;

  const ninjaMod = (event) => {
    event.preventDefault();
    setSide(!side);
  };

  return (
    <div className={!side ? 'header__incognito-mode__red' : 'header__incognito-mode__blue'}>
      <div className="header__incognito-content">
        <img src={headerImageNinjaSide} alt="" />
        <div className="switch__block" onClick={ninjaMod}>
          <label className="switch">
            <input type="checkbox" />
            <span
              className={`slider round ${
                side != userResponse.user.side ? 'sliderActive' : null
              }`}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

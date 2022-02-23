import React, { useState } from 'react';

import { MenuDropdown } from './menuDropdown';

export const Menu = ({ side, userResponse }) => {
  const [menu, setMenu] = useState(false);

  const headerMenuOpenSide = !side ? 'header__menu-content-red' : 'header__menu-content-blue';
  const headerMenuOpen = menu ? 'header__menu-profile__none' : headerMenuOpenSide;

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
  };

  return (
    <div className="header__menu">
      <div className={headerMenuOpen} onClick={() => setMenu(!menu)}>
        <div className={menu ? 'header__menu-item__none' : 'header__menu-item'}>
          <div className="header__menu-profile">
            <img
              className="profileicon"
              src={`http://80.249.146.66:81/${userResponse.user.image}`}
              alt=""
            />
            <p>{userResponse.user.nickname}</p>
          </div>
        </div>
      </div>
      <MenuDropdown side={side} menu={menu} signOut={signOut} />
    </div>
  );
};

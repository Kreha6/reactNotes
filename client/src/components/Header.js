import React from 'react';
import '../scss/Header.scss';

export const Header = (props) => {
    return (
      <header>
        <div className="menu-toggle" data-js="menu-toggle">
          <span className="menu-toggle-grippy" onClick={() => props.toggleNav()}>Toggle</span>
          <span className="menu-toggle-label">Menu</span>
        </div>
      </header>
    )

}

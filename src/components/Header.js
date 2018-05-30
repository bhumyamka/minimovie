import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Mini Movie</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href="">{props.about}</a>
              </nav>
            </div>
        </header>
);

Header.propTypes = {
    about: PropTypes.string
};

export default Header;
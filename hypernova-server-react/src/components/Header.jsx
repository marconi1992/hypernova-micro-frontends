import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';

const Header = ({ title, links }) => (
  <header className="k-header">
    <div className="k-header__brand">{title}</div>
    <span className="k-header__space" />
    <NavBar links={links} />
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: NavBar.propTypes.links,
};

Header.defaultProps = {
  links: [],
};

export default Header;

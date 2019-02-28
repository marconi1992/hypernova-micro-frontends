import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ links }) => (
  <nav className="k-navbar">
    <ul>
      { links.map(({ url, text }) => <li key={url} className="k-navbar__item"><a href={url}>{text}</a></li>) }
    </ul>
  </nav>
);

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
};

NavBar.defaultProps = {
  links: [],
};

export default NavBar;

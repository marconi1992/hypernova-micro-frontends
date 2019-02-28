import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsSelected: 0,
      item: null,
    };
    this.itemSelected = this.itemSelected.bind(this);
  }

  componentDidMount() {
    document.addEventListener('itemSelected', this.itemSelected);
  }

  componentWillUnmount() {
    document.removeEventListener('itemSelected', this.itemSelected);
  }

  itemSelected({ detail: item }) {
    const { itemsSelected } = this.state;
    this.setState({ itemsSelected: itemsSelected + 1, item });
  }

  render() {
    const { title, links } = this.props;
    const { itemsSelected, item } = this.state;
    return (
      <header className="k-header">
        <div className="k-header__brand">{title}</div>
        { item && <span className="k-header__last-item">{`Last Item: ${item.title}`}</span> }
        <span className="k-header__space" />
        <span>{`Items Clicked: ${itemsSelected}`}</span>
        <NavBar links={links} />
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: NavBar.propTypes.links,
};

Header.defaultProps = {
  links: [],
};

export default Header;

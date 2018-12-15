import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NavBar.styles';

class NavBar extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('NavBar will mount');
  }

  componentDidMount = () => {
    console.log('NavBar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('NavBar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NavBar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('NavBar did update');
  }

  componentWillUnmount = () => {
    console.log('NavBar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NavBarWrapper">
        Test content
      </div>
    );
  }
}

NavBar.propTypes = {
  // bla: PropTypes.string,
};

NavBar.defaultProps = {
  // bla: 'test',
};

export default NavBar;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './InfoWindow.styles';

class InfoWindow extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('InfoWindow will mount');
  }

  componentDidMount = () => {
    console.log('InfoWindow mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('InfoWindow will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('InfoWindow will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('InfoWindow did update');
  }

  componentWillUnmount = () => {
    console.log('InfoWindow will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="InfoWindowWrapper">
        Test content
      </div>
    );
  }
}

InfoWindow.propTypes = {
  // bla: PropTypes.string,
};

InfoWindow.defaultProps = {
  // bla: 'test',
};

export default InfoWindow;

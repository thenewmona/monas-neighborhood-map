import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Markers.styles';

class Markers extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Markers will mount');
  }

  componentDidMount = () => {
    console.log('Markers mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Markers will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Markers will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Markers did update');
  }

  componentWillUnmount = () => {
    console.log('Markers will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MarkersWrapper">
        Test content
      </div>
    );
  }
}

Markers.propTypes = {
  // bla: PropTypes.string,
};

Markers.defaultProps = {
  // bla: 'test',
};

export default Markers;

import React from 'react';
import App from './App';
import MuseumList from './components/MuseumList/MuseumList';

export default class MapContent extends React.component {
    render () {
        return (
            <div className='MapContent'>
            <MuseumList />
            <App />
            </div>
            
        )
    }
}

// export default MapContent;
// App.js

import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';
//import './styles.css'; // Import your CSS file for styling

const containerStyle = {
  width: '1000px',
  height: '400px',
};

const center = {
  lat: 36.857960,
  lng: 10.202090
};

// Navbar component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">navigator</div>
      
    </nav>
  );
};

function App() {
  return (
    <div>
      <Navbar /> 
      <div className='h'> 
        <LoadScript
          googleMapsApiKey="AIzaSyDNhjrMIn7LKvMDFORX8cw3dyym4zHkwRg"
        >
          <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default App;

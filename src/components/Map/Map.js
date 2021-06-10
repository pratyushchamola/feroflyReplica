import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapComponent from './MapComponent';

const Map = () => {
    
    return (
        // <div className="container">
            <div className="mapWrapper">
            <GoogleMapReact
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
            >
                <MapComponent 
                lat={79.955413} 
                lng={50.337844} 
                text={'Kreyser Avrora'} 
                />
            </GoogleMapReact>
            </div>
        // </div>
    )
}

export default Map

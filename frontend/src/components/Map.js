import React, { useEffect, useRef } from 'react';
import { MapBox } from '../styles/components';

function Map() {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
    script.async = true;
    script.onload = () => {
      if (window.google) {
        new window.google.maps.Map(ref.current, {
          center: { lat: 43.6532, lng: -79.3832 },
          zoom: 11,
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <MapBox ref={ref} />;
}

export default Map;

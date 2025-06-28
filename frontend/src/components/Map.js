import React, { useEffect, useRef } from 'react';
import { MapBox } from '../styles/components';

function Map() {
  const ref = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (window.google && ref.current) {
        new window.google.maps.Map(ref.current, {
          center: { lat: 43.6532, lng: -79.3832 },
          zoom: 11,
        });
      }
    };

    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    const scriptId = 'google-maps-script';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=29d294eef9e21cc10792af93d19ad1cc`;
      script.async = true;
      document.body.appendChild(script);
    }
    script.onload = initMap;
  }, []);

  return <MapBox ref={ref} />;
}

export default Map;

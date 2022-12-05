import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {TCity, TOffer} from '../../types/types';
import useMap from '../../hooks/useMap';


type MapProps = {
  city: TCity;
  points: TOffer[];
  selectedPoint: string;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

function Map({city, points, selectedPoint}:MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: (point.id === selectedPoint)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );
}

export default Map;

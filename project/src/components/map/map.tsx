import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT, CITY} from '../../const';
import {TCity, TOffer} from '../../types/types';
import useMap from '../../hooks/useMap';


type MapProps = {
  selectedCity: string;
  points: TOffer[];
  selectedPoint?: number;
  main?: boolean;
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

function Map({points, selectedCity, selectedPoint, main}:MapProps): JSX.Element {

  const currentCity: TCity = CITY[selectedCity];

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  const className = main ? 'cities' : 'property';

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.id === selectedPoint)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(markerGroup);
      });
      map.setView({lat:currentCity.lat, lng:currentCity.lng} );
      return () => {
        markerGroup.clearLayers();
      };
    }
  }, [map, points, selectedPoint, selectedCity]);

  return (
    <section
      className = {`${className}__map map`}
      ref={mapRef}
    />
  );
}


export default Map;

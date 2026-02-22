'use client';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

interface GoogleMapLocationProps {
  lat: number;
  lng: number;
  locationName: string;
}

// Fix for default marker icon issue in Leaflet with Next.js
const GoogleMapLocation = ({ lat, lng, locationName }: GoogleMapLocationProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Fix marker icon
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
    
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={styles.mapLocation} style={{ background: '#f3f4f6' }} />;
  }

  return (
    <MapContainer
      className={styles.mapLocation}
      center={[lat, lng]}
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
          {locationName}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default GoogleMapLocation;

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

interface MapProps {
  center: [number, number];
  zoom: number;
  className?: string;
}

const LeafletMap: React.FC<MapProps> = ({ center, zoom, className = "w-full h-80" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    if (!mapInstanceRef.current) {
      // Initialize map only once
      const map = L.map(mapRef.current).setView(center, zoom);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add a marker
      const marker = L.marker(center).addTo(map);
      marker.bindPopup("<b>NEF TRANSIT EXPRESS SARL</b><br>Situé à Ekie, au carrefour de l'amitié,<br>en face du collège Le Bon Berger").openPopup();

      mapInstanceRef.current = map;
    } else {
      // Update existing map
      mapInstanceRef.current.setView(center, zoom);
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom]);

  return <div ref={mapRef} className={className} />;
};

export default LeafletMap;

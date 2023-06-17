import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const LeafletMap = () => {
  return (
    <div className="w-full h-96">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
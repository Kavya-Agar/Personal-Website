import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import countryData from '../assets/countries.json';

const COLORS = {
  visited: '#4CAF50',
  wishlist: '#FF9800',
  default: '#E0E0E0'
};

function WorldMap() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(res => res.json())
      .then(data => setGeoData(data));
  }, []);

  const styleFeature = (feature) => {
    const countryName = feature.properties.name;
    let fillColor = COLORS.default;
    if (countryData.visited.includes(countryName)) fillColor = COLORS.visited;
    else if (countryData.wishlist.includes(countryName)) fillColor = COLORS.wishlist;

    return {
      fillColor,
      weight: 1,
      color: '#333',
      fillOpacity: 0.7
    };
  };

  return (
    <div className="relative h-[150vh] w-full justify-center">
        <h1 className="title sm:text-3xl text-center" style={{color: '#0f420f'}}>Where I've been so far!</h1>
      <MapContainer style={{ height: '90vh', width: '100%' }} center={[20, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData && (
          <GeoJSON
            data={geoData}
            style={styleFeature}
            onEachFeature={(feature, layer) => {
              const countryName = feature.properties.name;
              layer.bindTooltip(countryName, { sticky: true });
            }}
          />
        )}
      </MapContainer>
      {/* Info Panel */}
      <div className="absolute top-11 right-3 bg-white p-4 rounded-lg shadow-lg z-[1000] font-sans max-w-[200px] text-sm">
        <h3 className="text-lg font-semibold mb-2 text-center">Travel Stats</h3>
        <p>Visited: {countryData.visited.length} countries</p>
        <p>Wishlist: {countryData.wishlist.length} countries</p>
        <div className="mt-3 space-y-1 text-sm">
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 rounded bg-[#4CAF50]" />
            Visited
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 rounded bg-[#FF9800]" />
            Wishlist
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 mr-2 rounded bg-[#E0E0E0]" />
            Not Visited
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
